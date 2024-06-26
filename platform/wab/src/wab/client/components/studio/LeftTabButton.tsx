// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  DefaultLeftTabButtonProps,
  PlasmicLeftTabButton,
} from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicLeftTabButton";
import { Tooltip } from "antd";
import * as React from "react";
import { CSSProperties } from "react";

interface LeftTabButtonProps extends DefaultLeftTabButtonProps {
  onClick: () => void;
  href?: string;
  tooltip?: React.ReactNode;
  style?: CSSProperties;
}

function LeftTabButton(props: LeftTabButtonProps) {
  const { href, tooltip, ...rest } = props;
  let res = (
    <PlasmicLeftTabButton
      {...rest}
      {...({
        "data-state-isselected": !!props.isSelected ? "true" : "false",
      } as any)}
    />
  );

  if (tooltip) {
    res = (
      <Tooltip title={tooltip} placement="right">
        {res}
      </Tooltip>
    );
  }

  if (href) {
    res = (
      <a href={href} target={"_blank"}>
        {res}
      </a>
    );
  }
  return res;
}

export default LeftTabButton;
