/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: Ts79yZbRFG

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicLink as PlasmicLink__,
  SingleBooleanChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import { useEnvironment } from "../plasmic_kit_pricing/PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: Ts79yZbRFG/css

import BoxSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__BoxSvg"; // plasmic-import: 0qLNxfRGB/icon

createPlasmicElementProxy;

export type PlasmicMenuItem__VariantMembers = {
  selected: "selected";
};
export type PlasmicMenuItem__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicMenuItem__VariantsArgs;
export const PlasmicMenuItem__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicMenuItem__ArgsType = {
  children?: React.ReactNode;
  href?: string;
};
type ArgPropType = keyof PlasmicMenuItem__ArgsType;
export const PlasmicMenuItem__ArgProps = new Array<ArgPropType>(
  "children",
  "href"
);

export type PlasmicMenuItem__OverridesType = {
  root?: Flex__<"a">;
  freeBox?: Flex__<"div">;
  circle?: Flex__<"div">;
  icon?: Flex__<"svg">;
};

export interface DefaultMenuItemProps {
  children?: React.ReactNode;
  href?: string;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const $$ = {};

function PlasmicMenuItem__RenderFunc(props: {
  variants: PlasmicMenuItem__VariantsArgs;
  args: PlasmicMenuItem__ArgsType;
  overrides: PlasmicMenuItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [plasmic_plasmic_kit_pricing_css.global_environment_website]:
            hasVariant(globalVariants, "environment", "website"),
          [sty.rootselected]: hasVariant($state, "selected", "selected"),
        }
      )}
      href={args.href}
      platform={"react"}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxselected]: hasVariant($state, "selected", "selected"),
        })}
      >
        <div
          data-plasmic-name={"circle"}
          data-plasmic-override={overrides.circle}
          className={classNames(projectcss.all, sty.circle, {
            [sty.circleselected]: hasVariant($state, "selected", "selected"),
          })}
        />

        <BoxSvgIcon
          data-plasmic-name={"icon"}
          data-plasmic-override={overrides.icon}
          className={classNames(projectcss.all, sty.icon, {
            [sty.iconselected]: hasVariant($state, "selected", "selected"),
          })}
          role={"img"}
        />

        {renderPlasmicSlot({
          defaultContents: "Models",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenselected]: hasVariant(
              $state,
              "selected",
              "selected"
            ),
          }),
        })}
      </Stack__>
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "circle", "icon"],
  freeBox: ["freeBox", "circle", "icon"],
  circle: ["circle"],
  icon: ["icon"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
  circle: "div";
  icon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItem__VariantsArgs;
    args?: PlasmicMenuItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuItem__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuItem__ArgProps,
          internalVariantPropNames: PlasmicMenuItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    circle: makeNodeComponent("circle"),
    icon: makeNodeComponent("icon"),

    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps,
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */
