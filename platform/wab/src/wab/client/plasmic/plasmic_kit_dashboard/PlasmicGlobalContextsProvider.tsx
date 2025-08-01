/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE

import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import * as React from "react";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, embedCssProps } = props;

  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css!
          : '.price-grandient-global.white-bg:before {\n    background-color: white;\n}\n.price-grandient-global:before {\n    content: "";\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    bottom: 1px;\n    left: 1px;\n    border-radius: 14px;\n}\n.price-grandient-global {\n    box-shadow: none !important;\n}\n.bdr-gradient-1 {\n    background: linear-gradient(90deg, #8636F8 2.26%, #F020B3 34.84%);\n}\n.bdr-gradient-2 {\n    background: linear-gradient(90deg, #FFB800 2.26%, #F8367C 34.84%);\n}\n.bdr-gradient-3 {\n    background: linear-gradient(90deg, #00AAFF 2.26%, #8636F8 34.84%);\n}\n.btn2 {\n     border: none;\n     outline: none;\n     position: relative;\n     border-radius: 99px;\n     background: linear-gradient(81.31deg, #8636F8 2.26%, #F020B3 34.84%, #F8475E 67.42%, #FF9421 100%) !important;\n}\n.btn2:before {\n     content: "";\n     position: absolute;\n     top: 1px;\n     right: 1px;\n     bottom: 1px;\n     left: 1px;\n}'
      }
    >
      {children}
    </EmbedCss>
  );
}
