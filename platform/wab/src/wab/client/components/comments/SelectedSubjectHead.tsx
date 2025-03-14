// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  DefaultSelectedSubjectHeadProps,
  PlasmicSelectedSubjectHead,
} from "@/wab/client/plasmic/plasmic_kit_comments/PlasmicSelectedSubjectHead";
import { ViewCtx } from "@/wab/client/studio-ctx/view-ctx";
import { TplNamable, summarizeTpl } from "@/wab/shared/core/tpls";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";

export interface SelectedSubjectHeadProps
  extends DefaultSelectedSubjectHeadProps {
  viewCtx?: ViewCtx;
  tpl?: TplNamable;
}

function SelectedSubjectHead_(
  props: SelectedSubjectHeadProps,
  ref: HTMLElementRefOf<"div">
) {
  const { tpl, viewCtx, ...rest } = props;

  if (!viewCtx || !tpl) {
    return null;
  }

  return (
    <PlasmicSelectedSubjectHead
      root={{ ref }}
      name={{
        children: tpl.name || "unnamed",
      }}
      type={{
        children: summarizeTpl(
          tpl,
          viewCtx.effectiveCurrentVariantSetting(tpl).rsh()
        ),
      }}
      {...rest}
    />
  );
}

export const SelectedSubjectHead = React.forwardRef(SelectedSubjectHead_);
