// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ieacQ3Z46z4gwo1FnaB5vY
// Component: girCdMST6R

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import sty from "./PlasmicCmsEntryItem.module.css"; // plasmic-import: girCdMST6R/css
import projectcss from "./plasmic_plasmic_kit_cms.module.css"; // plasmic-import: ieacQ3Z46z4gwo1FnaB5vY/projectcss

import PencilSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__PencilSvg"; // plasmic-import: 540duoJvb/icon

createPlasmicElementProxy;

export type PlasmicCmsEntryItem__VariantMembers = {
  isActive: "isActive";
  hasDraft: "hasDraft";
};
export type PlasmicCmsEntryItem__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
  hasDraft?: SingleBooleanChoiceArg<"hasDraft">;
};
type VariantPropType = keyof PlasmicCmsEntryItem__VariantsArgs;
export const PlasmicCmsEntryItem__VariantProps = new Array<VariantPropType>(
  "isActive",
  "hasDraft"
);

export type PlasmicCmsEntryItem__ArgsType = {
  children?: React.ReactNode;
  details?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCmsEntryItem__ArgsType;
export const PlasmicCmsEntryItem__ArgProps = new Array<ArgPropType>(
  "children",
  "details"
);

export type PlasmicCmsEntryItem__OverridesType = {
  root?: Flex__<"div">;
  hasDraftMarker?: Flex__<"svg">;
};

export interface DefaultCmsEntryItemProps {
  children?: React.ReactNode;
  details?: React.ReactNode;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  hasDraft?: SingleBooleanChoiceArg<"hasDraft">;
  className?: string;
}

const $$ = {};

function PlasmicCmsEntryItem__RenderFunc(props: {
  variants: PlasmicCmsEntryItem__VariantsArgs;
  args: PlasmicCmsEntryItem__ArgsType;
  overrides: PlasmicCmsEntryItem__OverridesType;
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
        path: "isActive",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isActive,
      },
      {
        path: "hasDraft",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hasDraft,
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootisActive]: hasVariant($state, "isActive", "isActive") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__ld9Y4, {
          [sty.freeBoxhasDraft__ld9Y4MXg21]: hasVariant(
            $state,
            "hasDraft",
            "hasDraft"
          ),
          [sty.freeBoxisActive__ld9Y4OiAwm]: hasVariant(
            $state,
            "isActive",
            "isActive"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Some Entry",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisActive]: hasVariant(
              $state,
              "isActive",
              "isActive"
            ),
          }),
        })}
        <PencilSvgIcon
          data-plasmic-name={"hasDraftMarker"}
          data-plasmic-override={overrides.hasDraftMarker}
          className={classNames(projectcss.all, sty.hasDraftMarker, {
            [sty.hasDraftMarkerhasDraft]: hasVariant(
              $state,
              "hasDraft",
              "hasDraft"
            ),
          })}
          role={"img"}
        />
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__cpx2Y, {
          [sty.freeBoxhasDraft__cpx2YmXg21]: hasVariant(
            $state,
            "hasDraft",
            "hasDraft"
          ),
          [sty.freeBoxisActive__cpx2YOiAwm]: hasVariant(
            $state,
            "isActive",
            "isActive"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Apr 1, 2022",
          value: args.details,
          className: classNames(sty.slotTargetDetails, {
            [sty.slotTargetDetailsisActive]: hasVariant(
              $state,
              "isActive",
              "isActive"
            ),
          }),
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "hasDraftMarker"],
  hasDraftMarker: ["hasDraftMarker"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  hasDraftMarker: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCmsEntryItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCmsEntryItem__VariantsArgs;
    args?: PlasmicCmsEntryItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCmsEntryItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCmsEntryItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicCmsEntryItem__ArgProps,
          internalVariantPropNames: PlasmicCmsEntryItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCmsEntryItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCmsEntryItem";
  } else {
    func.displayName = `PlasmicCmsEntryItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCmsEntryItem = Object.assign(
  // Top-level PlasmicCmsEntryItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hasDraftMarker: makeNodeComponent("hasDraftMarker"),

    // Metadata about props expected for PlasmicCmsEntryItem
    internalVariantProps: PlasmicCmsEntryItem__VariantProps,
    internalArgProps: PlasmicCmsEntryItem__ArgProps,
  }
);

export default PlasmicCmsEntryItem;
/* prettier-ignore-end */
