// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import {
  DefaultAnalyticsHeaderProps,
  PlasmicAnalyticsHeader,
} from "@/wab/client/plasmic/plasmic_kit_analytics/PlasmicAnalyticsHeader";
import { ensure } from "@/wab/shared/common";
import { ORGANIZATION_CAP, ORGANIZATION_LOWER } from "@/wab/shared/Labels";
import { APP_ROUTES } from "@/wab/shared/route/app-routes";
import { fillRoute } from "@/wab/shared/route/route";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";
import { useHistory } from "react-router";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface AnalyticsHeaderProps extends Omit<DefaultAnalyticsHeaderProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultAnalyticsHeaderProps altogether and have
// total control over the props for your component.
export interface AnalyticsHeaderProps extends DefaultAnalyticsHeaderProps {
  teamId: string;
}

function AnalyticsHeader_(
  props: AnalyticsHeaderProps,
  ref: HTMLElementRefOf<"div">
) {
  const history = useHistory();
  const appCtx = useAppCtx();
  const { teamId, ...rest } = props;
  const team = ensure(
    appCtx.teams.find((t) => t.id === teamId),
    `${ORGANIZATION_CAP} with ${ORGANIZATION_LOWER}Id should exist`
  );

  return (
    <PlasmicAnalyticsHeader
      root={{ ref }}
      args={{ teamName: team.name }}
      logo={{
        onClick: () => {
          history.push(fillRoute(APP_ROUTES.dashboard, {}));
        },
      }}
      teamName={team.name}
      backBtn={{
        onClick: () => {
          history.push(fillRoute(APP_ROUTES.org, { teamId }));
        },
      }}
      {...rest}
    />
  );
}

const AnalyticsHeader = React.forwardRef(AnalyticsHeader_);
export default AnalyticsHeader;
