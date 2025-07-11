import { Config } from "@/wab/server/config";
import { getDefaultConnection } from "@/wab/server/db/DbCon";
import { DbMgr, SUPER_USER } from "@/wab/server/db/DbMgr";
import { createMailer } from "@/wab/server/emails/Mailer";
import {
  Notification,
  sendUserNotificationEmail,
} from "@/wab/server/emails/comment-notification-email";
import {
  Comment,
  CommentReaction,
  CommentThread,
  CommentThreadHistory,
  Permission,
  Project,
  User,
} from "@/wab/server/entities/Entities";
import {
  ApiNotificationSettings,
  BranchId,
  CommentId,
  CommentThreadId,
  ProjectId,
  UserId,
} from "@/wab/shared/ApiSchema";
import { accessLevelRank } from "@/wab/shared/EntUtil";
import {
  extractMentionedEmails,
  hasUserParticipatedInThread,
} from "@/wab/shared/comments-utils";
import { ensure, withoutNils, xGroupBy, xMapValues } from "@/wab/shared/common";

const COMMENTS_NOTIFICATION_LOCK = "comments_notification_lock";

export type NotificationsByProject = Map<
  ProjectId,
  Map<BranchId | "main", Map<CommentThreadId, Notification[]>>
>;

export type NotificationsByUser = Map<UserId, NotificationsByProject>;

class Context {
  readonly completeThreadComments: Map<CommentThreadId, Comment[]> = new Map();
  readonly mentionedEmailsPerComment: Map<CommentId, string[]> = new Map();

  constructor(
    readonly dbManager: DbMgr,
    readonly newComments: Map<CommentThreadId, Comment[]>,
    readonly newThreadHistories: Map<CommentThreadId, CommentThreadHistory[]>,
    readonly newCommentReactions: Map<CommentThreadId, CommentReaction[]>
  ) {}

  /**
   * Get complete comments for a specific thread.
   */
  async getCompleteCommentsForThread(
    threadId: CommentThreadId
  ): Promise<Comment[]> {
    const existingComments = this.completeThreadComments.get(threadId);
    if (existingComments) {
      return existingComments;
    }
    const completeThreadComments = await this.dbManager.getCommentsForThread(
      threadId
    );
    this.completeThreadComments.set(threadId, completeThreadComments);
    return completeThreadComments;
  }

  /**
   * Get mentioned user emails in a comment.
   */
  getMentionedEmails(comment: Comment): string[] {
    const emails = this.mentionedEmailsPerComment.get(comment.id);
    if (emails) {
      return emails;
    }
    const mentionedEmails = extractMentionedEmails(comment.body);
    this.mentionedEmailsPerComment.set(comment.id, mentionedEmails);
    return mentionedEmails;
  }
}

/**
 * Processes notifications for users based on recent comments in projects.
 */
export async function processUnnotifiedCommentsNotifications(
  dbManager: DbMgr
): Promise<{
  notificationsByUser: NotificationsByUser;
  recentCommentThreads: string[];
  notifiedDate: Date;
}> {
  // TODO: All our timestamps are generated by the server today. To ensure comments are not missed due to server clock skew, we should change all the timestamps to use the DB clock. However, this would require some larger changes to how we update updatedAt.
  const now = new Date();
  console.log(
    `[Comments] Starting notification processing at ${now.toISOString()}`
  );
  const recentCommentThreads = await dbManager.getUnnotifiedCommentThreads(now);
  console.log(
    `[Comments] Found ${recentCommentThreads.length} threads with new activity`
  );
  const threadIds = recentCommentThreads.map((t) => t.id);
  const recentComments = await dbManager.getUnnotifiedCommentsByThreadIds(
    threadIds,
    now
  );
  const recentCommentThreadHistories =
    await dbManager.getUnnotifiedCommentsThreadHistoriesByThreadIds(
      threadIds,
      now
    );
  const recentCommentReactions =
    await dbManager.getUnnotifiedCommentsReactionsByThreadIds(threadIds, now);

  const commentsByThreads = xGroupBy(
    recentComments,
    (comment) => comment.commentThreadId
  );
  const threadHistoryByThread = xGroupBy(
    recentCommentThreadHistories,
    (history) => history.commentThreadId
  );
  const commentReactionsByThread = xGroupBy(
    recentCommentReactions,
    (reaction) =>
      ensure(
        reaction?.comment?.commentThreadId,
        "Comment thread does not exist"
      )
  );

  const notifications: Notification[] = [];
  const commentThreadsByProject = xGroupBy(
    recentCommentThreads,
    (commentThread) => commentThread.projectId
  );

  const ctx = new Context(
    dbManager,
    commentsByThreads,
    threadHistoryByThread,
    commentReactionsByThread
  );

  for (const [projectId, commentThreads] of commentThreadsByProject) {
    const projectNotifications = await processThreadsForProject(
      ctx,
      projectId,
      commentThreads
    );
    notifications.push(...projectNotifications);
  }

  const notificationsByUser =
    groupNotificationsByUserProjectBranchAndThread(notifications);

  console.log(
    `[Comments] Generated notifications for ${notificationsByUser.size} users`
  );

  return {
    notificationsByUser,
    recentCommentThreads: recentCommentThreads.map((t) => t.id),
    notifiedDate: now,
  };
}

/**
 * Processes threads for a specific project.
 */
async function processThreadsForProject(
  ctx: Context,
  projectId: ProjectId,
  commentThreads: CommentThread[]
): Promise<Notification[]> {
  const dbManager = ctx.dbManager;
  const project = await dbManager.getProjectById(projectId);
  const permissions = await dbManager.getPermissionsForProject(projectId);
  const projectUsers = getUniqueUsersWithCommentAccess(permissions);

  const notifications: Notification[] = [];

  for (const user of projectUsers) {
    const notificationSettings = await getUserNotificationSetting(
      dbManager,
      user.id,
      projectId
    );

    const userCommentNotifications = await processUserForProject(
      ctx,
      project,
      user,
      notificationSettings,
      commentThreads
    );

    const userThreadHistoryNotifications = await processThreadHistoriesForUser(
      ctx,
      project,
      user,
      notificationSettings
    );

    notifications.push(
      ...userCommentNotifications,
      ...userThreadHistoryNotifications
    );
  }

  const commentReactionNotifications = await processCommentReactionForProject(
    ctx,
    project
  );

  return [...notifications, ...commentReactionNotifications];
}

/**
 * Processes notifications for a user in a project.
 */
async function processUserForProject(
  ctx: Context,
  project: Project,
  user: User,
  notificationSettings: ApiNotificationSettings,
  commentThreads: CommentThread[]
): Promise<Notification[]> {
  if (notificationSettings.notifyAbout === "none") {
    return [];
  }

  const notifications: Notification[] = [];

  const filteredCommentThreads = filterOutUserCommentThreads(
    user,
    commentThreads,
    ctx
  );

  for (const commentThread of filteredCommentThreads) {
    const threadNotifications = await processThreadForUser(
      ctx,
      project,
      user,
      notificationSettings,
      commentThread
    );

    notifications.push(...threadNotifications);
  }

  return notifications;
}

/**
 * Processes a thread for a user.
 */
async function processThreadForUser(
  ctx: Context,
  project: Project,
  user: User,
  notificationSettings: ApiNotificationSettings,
  commentThread: CommentThread
): Promise<Notification[]> {
  const notifications: Notification[] = [];
  const threadComments = ctx.newComments.get(commentThread.id) || [];
  const completeThreadComments = await ctx.getCompleteCommentsForThread(
    commentThread.id
  );

  for (const comment of threadComments) {
    const commentNotification = await processCommentForUser(
      ctx,
      project,
      user,
      notificationSettings,
      comment,
      completeThreadComments,
      commentThread
    );

    if (commentNotification) {
      notifications.push(commentNotification);
    }
  }

  return notifications;
}

/**
 * Processes a comment for a user.
 */
async function processCommentForUser(
  ctx: Context,
  project: Project,
  user: User,
  notificationSettings: ApiNotificationSettings,
  comment: Comment,
  completeThreadComments: Comment[],
  commentThread: CommentThread
): Promise<Notification | null> {
  const isReply =
    completeThreadComments.findIndex((tc) => tc.id === comment.id) > 0;

  const userParticipatedBefore = completeThreadComments.some(
    (tc) => tc.createdById === user.id && tc.createdAt < comment.createdAt
  );
  const mentionedEmails = ctx.getMentionedEmails(comment);
  const userMentioned = mentionedEmails.includes(user.email);

  const notify = shouldNotify(
    notificationSettings.notifyAbout,
    isReply,
    userParticipatedBefore,
    userMentioned
  );

  if (!notify || comment.createdById === user.id) {
    return null;
  }

  const rootComment = completeThreadComments[0];
  return {
    user: user,
    project: project,
    rootComment: rootComment,
    timestamp: comment.createdAt,
    commentThread: commentThread,
    entry: {
      type: "COMMENT",
      comment,
    },
  };
}

/**
 * Processes thread histories for a user.
 */
async function processThreadHistoriesForUser(
  ctx: Context,
  project: Project,
  user: User,
  notificationSettings: ApiNotificationSettings
): Promise<Notification[]> {
  const notifications: Notification[] = [];
  for (const [threadId, commentThreadHistories] of ctx.newThreadHistories) {
    const completeThreadComments = await ctx.getCompleteCommentsForThread(
      threadId
    );

    for (const commentThreadHistory of commentThreadHistories) {
      if (commentThreadHistory.commentThread?.projectId === project.id) {
        const isMentionOrReplyNotification =
          notificationSettings.notifyAbout === "mentions-and-replies" &&
          hasUserParticipatedInThread(user.id, completeThreadComments);

        const isAllNotificationsEnabled =
          notificationSettings.notifyAbout === "all";

        if (
          (isMentionOrReplyNotification || isAllNotificationsEnabled) &&
          commentThreadHistory.createdById !== user.id
        ) {
          const rootComment = completeThreadComments[0];
          notifications.push({
            user,
            project,
            rootComment,
            commentThread: commentThreadHistory.commentThread,
            timestamp: commentThreadHistory.createdAt,
            entry: {
              type: "THREAD_HISTORY",
              history: commentThreadHistory,
            },
          });
        }
      }
    }
  }

  return notifications;
}

/**
 * Processes comment reactions for a project.
 */
async function processCommentReactionForProject(
  ctx: Context,
  project: Project
): Promise<Notification[]> {
  const notifications: Notification[] = [];
  for (const [threadId, commentReactions] of ctx.newCommentReactions) {
    const completeThreadComments = await ctx.getCompleteCommentsForThread(
      threadId
    );
    for (const commentReaction of commentReactions) {
      const comment = ensure(
        commentReaction.comment,
        "Reaction comment does not exist"
      );
      const commentUser = ensure(
        comment.createdBy,
        "Comment user does not exist"
      );
      const commentThread = ensure(
        comment.commentThread,
        "Comment commentThread does not exist"
      );

      const notificationSettings = await getUserNotificationSetting(
        ctx.dbManager,
        commentUser.id,
        project.id
      );

      if (
        notificationSettings.notifyAbout !== "none" &&
        commentUser.id !== commentReaction.createdById
      ) {
        const rootComment = completeThreadComments[0];
        notifications.push({
          user: commentUser,
          project,
          timestamp: commentReaction.createdAt,
          rootComment,
          commentThread,
          entry: {
            type: "REACTION",
            reaction: commentReaction,
          },
        });
      }
    }
  }

  return notifications;
}

/**
 * Helper functions and utilities.
 */
function filterOutUserCommentThreads(
  user: User,
  commentThreads: CommentThread[],
  ctx: Context
): CommentThread[] {
  return commentThreads.filter((commentThread) => {
    const comments = ctx.newComments.get(commentThread.id) || [];
    return comments.some((comment) => comment.createdById !== user.id);
  });
}

export function getUniqueUsersWithCommentAccess(
  permissions: Permission[]
): User[] {
  const users = withoutNils(
    permissions
      .filter(
        (p) => accessLevelRank(p.accessLevel) >= accessLevelRank("commenter")
      )
      .map((permission) => permission.user)
  );
  return [...new Map(users.map((user) => [user.id, user])).values()];
}

/**
 * Sends notification emails about new comments.
 */
export async function sendCommentsNotificationEmails(
  config: Config
): Promise<void> {
  console.log("[Comments] Starting email notification process");
  const mailer = createMailer();
  const connection = await getDefaultConnection();
  await connection.transaction(async (entityManager) => {
    const dbManager = new DbMgr(entityManager, SUPER_USER);

    await dbManager.waitLockTransactionResource(COMMENTS_NOTIFICATION_LOCK);

    const { notificationsByUser, recentCommentThreads, notifiedDate } =
      await processUnnotifiedCommentsNotifications(dbManager);

    await Promise.all(
      Array.from(notificationsByUser).map(
        async ([_userId, projectWiseUserNotification]) => {
          await sendUserNotificationEmail(
            mailer,
            projectWiseUserNotification,
            config.host,
            config.mailFrom,
            config.mailBcc
          );
        }
      )
    );

    await dbManager.markCommentThreadsAsNotified(
      recentCommentThreads,
      notifiedDate
    );
    console.log(
      `[Comments] Marked ${recentCommentThreads.length} threads as notified`
    );
    console.log("[Comments] Email notification process completed successfully");
  });
}

/**
 * Determines whether a notification should be sent based on the user's settings.
 */
function shouldNotify(
  notifyAbout: "all" | "mentions-and-replies" | "none",
  isReply: boolean,
  userParticipated: boolean,
  userMentioned: boolean
): boolean {
  if (notifyAbout === "all") {
    return true;
  }
  if (
    notifyAbout === "mentions-and-replies" &&
    ((isReply && userParticipated) || userMentioned)
  ) {
    return true;
  }
  return false;
}

async function getUserNotificationSetting(
  dbManager: DbMgr,
  userId: UserId,
  projectId: ProjectId
): Promise<ApiNotificationSettings> {
  return (
    (await dbManager.tryGetNotificationSettings(userId, projectId)) || {
      notifyAbout: "mentions-and-replies",
    }
  );
}

function groupNotificationsByUserProjectBranchAndThread(
  notifications: Notification[]
): NotificationsByUser {
  // Sort notifications by timestamp in ascending order
  const sortedNotifications = notifications.sort(
    (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
  );

  // Step 1: Group by user ID
  const notificationsByUser = xGroupBy(
    sortedNotifications,
    (notification) => notification.user.id
  );

  // Step 2: For each user, group by project ID
  const notificationsByUserAndProject = xMapValues(
    notificationsByUser,
    (notificationsForUser) =>
      xGroupBy(notificationsForUser, (notification) => notification.project.id)
  );

  // Step 3: For each project, group by branch ID
  const notificationsByUserProjectAndBranch = xMapValues(
    notificationsByUserAndProject,
    (notificationsForProject) =>
      xMapValues(notificationsForProject, (notificationsForBranch) =>
        xGroupBy(
          notificationsForBranch,
          (notification) => notification.commentThread.branchId || "main"
        )
      )
  );

  // Step 4: For each branch, group by thread ID
  const notificationsByUserProjectBranchAndThread = xMapValues(
    notificationsByUserProjectAndBranch,
    (notificationsForProject) =>
      xMapValues(notificationsForProject, (notificationsForBranch) =>
        xMapValues(notificationsForBranch, (notificationsForThread) =>
          xGroupBy(
            notificationsForThread,
            (notification) => notification.rootComment.commentThreadId
          )
        )
      )
  );

  return notificationsByUserProjectBranchAndThread;
}
