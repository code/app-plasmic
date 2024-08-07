// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9csusiyEETC5n9fFKLeYNK
// Component: j36V3TJJrg
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import DataSource from "../../components/DataSource"; // plasmic-import: _Lp0iIQjbN/component
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon
import SearchsvgIcon from "../q_4_icons/icons/PlasmicIcon__Searchsvg"; // plasmic-import: R5DLz11OA/icon
import image9IFo08KkR from "./images/image.png"; // plasmic-import: 9iFo08KkR/picture
import image10R71LPt9HC from "./images/image10.png"; // plasmic-import: R71lPt9hC/picture
import image11DckWvMlr3 from "./images/image11.png"; // plasmic-import: DCKWvMlr3/picture
import image12FAt8Vyqin from "./images/image12.png"; // plasmic-import: fAt8vyqin/picture
import image13JLloVv4Um from "./images/image13.png"; // plasmic-import: jLLOVv4um/picture
import image14Tclh459Hj from "./images/image14.png"; // plasmic-import: tclh459HJ/picture
import image15Q19Qwmvr from "./images/image15.png"; // plasmic-import: Q-19QWMVR/picture
import image16WaXa3Wvyg from "./images/image16.png"; // plasmic-import: waXA3wvyg/picture
import image2I3GyxvVFz from "./images/image2.png"; // plasmic-import: i3GyxvVFz/picture
import image3PzwwbIp93 from "./images/image3.png"; // plasmic-import: PzwwbIP93/picture
import image4GmUm3PEu from "./images/image4.png"; // plasmic-import: gm-UM3pEu/picture
import image5LYsHu22Ae from "./images/image5.png"; // plasmic-import: lYsHu22AE/picture
import image6SiwLjberf from "./images/image6.png"; // plasmic-import: SIWLjberf/picture
import image7ABoyClima from "./images/image7.png"; // plasmic-import: aBOYClima/picture
import image8Pd4OaIwV from "./images/image8.png"; // plasmic-import: Pd4OAIwV_/picture
import image9HbmHndPeK from "./images/image9.png"; // plasmic-import: hbmHndPeK/picture
import sty from "./PlasmicDataSourceBrowser.module.css"; // plasmic-import: j36V3TJJrg/css
import projectcss from "./plasmic_plasmic_kit_data_queries.module.css"; // plasmic-import: 9csusiyEETC5n9fFKLeYNK/projectcss

export type PlasmicDataSourceBrowser__VariantMembers = {};

export type PlasmicDataSourceBrowser__VariantsArgs = {};
type VariantPropType = keyof PlasmicDataSourceBrowser__VariantsArgs;
export const PlasmicDataSourceBrowser__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDataSourceBrowser__ArgsType = {};
type ArgPropType = keyof PlasmicDataSourceBrowser__ArgsType;
export const PlasmicDataSourceBrowser__ArgProps = new Array<ArgPropType>();

export type PlasmicDataSourceBrowser__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  search?: p.Flex<typeof Textbox>;
  freeBox?: p.Flex<"div">;
  rest?: p.Flex<typeof DataSource>;
  graphql?: p.Flex<typeof DataSource>;
  airtable?: p.Flex<typeof DataSource>;
  bigcommerce?: p.Flex<typeof DataSource>;
  contentful?: p.Flex<typeof DataSource>;
  github?: p.Flex<typeof DataSource>;
  sheets?: p.Flex<typeof DataSource>;
  hn?: p.Flex<typeof DataSource>;
  mysql?: p.Flex<typeof DataSource>;
  postgresql?: p.Flex<typeof DataSource>;
  salesforce?: p.Flex<typeof DataSource>;
  sanity?: p.Flex<typeof DataSource>;
  shopify?: p.Flex<typeof DataSource>;
  sqlServer?: p.Flex<typeof DataSource>;
  wordpress?: p.Flex<typeof DataSource>;
  wordpressDotCom?: p.Flex<typeof DataSource>;
};

export interface DefaultDataSourceBrowserProps {
  className?: string;
}

function PlasmicDataSourceBrowser__RenderFunc(props: {
  variants: PlasmicDataSourceBrowser__VariantsArgs;
  args: PlasmicDataSourceBrowser__ArgsType;
  overrides: PlasmicDataSourceBrowser__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Choose a data source"}
      </div>

      <Textbox
        data-plasmic-name={"search"}
        data-plasmic-override={overrides.search}
        className={classNames("__wab_instance", sty.search)}
        placeholder={"Search" as const}
        prefixIcon={
          <SearchsvgIcon
            className={classNames(projectcss.all, sty.svg__punuy)}
            role={"img"}
          />
        }
        styleType={["bordered"]}
        suffixIcon={
          <ClosesvgIcon
            className={classNames(projectcss.all, sty.svg___4Ijuc)}
            role={"img"}
          />
        }
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <DataSource
          data-plasmic-name={"rest"}
          data-plasmic-override={overrides.rest}
          className={classNames("__wab_instance", sty.rest)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img___9Swz3
            )}
            src={image15Q19Qwmvr}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"graphql"}
          data-plasmic-override={overrides.graphql}
          className={classNames("__wab_instance", sty.graphql)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__p8OtE
            )}
            src={image16WaXa3Wvyg}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"airtable"}
          data-plasmic-override={overrides.airtable}
          className={classNames("__wab_instance", sty.airtable)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__qVSkW
            )}
            src={image3PzwwbIp93}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"bigcommerce"}
          data-plasmic-override={overrides.bigcommerce}
          className={classNames("__wab_instance", sty.bigcommerce)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img___2TQkm
            )}
            src={image9HbmHndPeK}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"contentful"}
          data-plasmic-override={overrides.contentful}
          className={classNames("__wab_instance", sty.contentful)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__rsNbX
            )}
            src={image6SiwLjberf}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"github"}
          data-plasmic-override={overrides.github}
          className={classNames("__wab_instance", sty.github)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__rpvqz
            )}
            src={image5LYsHu22Ae}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"sheets"}
          data-plasmic-override={overrides.sheets}
          className={classNames("__wab_instance", sty.sheets)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__f3E1H
            )}
            src={image2I3GyxvVFz}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"hn"}
          data-plasmic-override={overrides.hn}
          className={classNames("__wab_instance", sty.hn)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__hdNh3
            )}
            src={image12FAt8Vyqin}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"mysql"}
          data-plasmic-override={overrides.mysql}
          className={classNames("__wab_instance", sty.mysql)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__lswIp
            )}
            src={image14Tclh459Hj}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"postgresql"}
          data-plasmic-override={overrides.postgresql}
          className={classNames("__wab_instance", sty.postgresql)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__actOc
            )}
            src={image13JLloVv4Um}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"salesforce"}
          data-plasmic-override={overrides.salesforce}
          className={classNames("__wab_instance", sty.salesforce)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__xdcv0
            )}
            src={image4GmUm3PEu}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"sanity"}
          data-plasmic-override={overrides.sanity}
          className={classNames("__wab_instance", sty.sanity)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__g1Rbp
            )}
            src={image7ABoyClima}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"shopify"}
          data-plasmic-override={overrides.shopify}
          className={classNames("__wab_instance", sty.shopify)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__s4Go7
            )}
            src={image8Pd4OaIwV}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"sqlServer"}
          data-plasmic-override={overrides.sqlServer}
          className={classNames("__wab_instance", sty.sqlServer)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__ygbvf
            )}
            src={image11DckWvMlr3}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"wordpress"}
          data-plasmic-override={overrides.wordpress}
          className={classNames("__wab_instance", sty.wordpress)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__nPcBc
            )}
            src={image9IFo08KkR}
          />
        </DataSource>

        <DataSource
          data-plasmic-name={"wordpressDotCom"}
          data-plasmic-override={overrides.wordpressDotCom}
          className={classNames("__wab_instance", sty.wordpressDotCom)}
        >
          <img
            alt={""}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img___7PF8S
            )}
            src={image10R71LPt9HC}
          />
        </DataSource>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "search",
    "freeBox",
    "rest",
    "graphql",
    "airtable",
    "bigcommerce",
    "contentful",
    "github",
    "sheets",
    "hn",
    "mysql",
    "postgresql",
    "salesforce",
    "sanity",
    "shopify",
    "sqlServer",
    "wordpress",
    "wordpressDotCom",
  ],

  text: ["text"],
  search: ["search"],
  freeBox: [
    "freeBox",
    "rest",
    "graphql",
    "airtable",
    "bigcommerce",
    "contentful",
    "github",
    "sheets",
    "hn",
    "mysql",
    "postgresql",
    "salesforce",
    "sanity",
    "shopify",
    "sqlServer",
    "wordpress",
    "wordpressDotCom",
  ],

  rest: ["rest"],
  graphql: ["graphql"],
  airtable: ["airtable"],
  bigcommerce: ["bigcommerce"],
  contentful: ["contentful"],
  github: ["github"],
  sheets: ["sheets"],
  hn: ["hn"],
  mysql: ["mysql"],
  postgresql: ["postgresql"],
  salesforce: ["salesforce"],
  sanity: ["sanity"],
  shopify: ["shopify"],
  sqlServer: ["sqlServer"],
  wordpress: ["wordpress"],
  wordpressDotCom: ["wordpressDotCom"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  search: typeof Textbox;
  freeBox: "div";
  rest: typeof DataSource;
  graphql: typeof DataSource;
  airtable: typeof DataSource;
  bigcommerce: typeof DataSource;
  contentful: typeof DataSource;
  github: typeof DataSource;
  sheets: typeof DataSource;
  hn: typeof DataSource;
  mysql: typeof DataSource;
  postgresql: typeof DataSource;
  salesforce: typeof DataSource;
  sanity: typeof DataSource;
  shopify: typeof DataSource;
  sqlServer: typeof DataSource;
  wordpress: typeof DataSource;
  wordpressDotCom: typeof DataSource;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDataSourceBrowser__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicDataSourceBrowser__VariantsArgs;
  args?: PlasmicDataSourceBrowser__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicDataSourceBrowser__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicDataSourceBrowser__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDataSourceBrowser__ArgProps,
      internalVariantPropNames: PlasmicDataSourceBrowser__VariantProps,
    });

    return PlasmicDataSourceBrowser__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataSourceBrowser";
  } else {
    func.displayName = `PlasmicDataSourceBrowser.${nodeName}`;
  }
  return func;
}

export const PlasmicDataSourceBrowser = Object.assign(
  // Top-level PlasmicDataSourceBrowser renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    search: makeNodeComponent("search"),
    freeBox: makeNodeComponent("freeBox"),
    rest: makeNodeComponent("rest"),
    graphql: makeNodeComponent("graphql"),
    airtable: makeNodeComponent("airtable"),
    bigcommerce: makeNodeComponent("bigcommerce"),
    contentful: makeNodeComponent("contentful"),
    github: makeNodeComponent("github"),
    sheets: makeNodeComponent("sheets"),
    hn: makeNodeComponent("hn"),
    mysql: makeNodeComponent("mysql"),
    postgresql: makeNodeComponent("postgresql"),
    salesforce: makeNodeComponent("salesforce"),
    sanity: makeNodeComponent("sanity"),
    shopify: makeNodeComponent("shopify"),
    sqlServer: makeNodeComponent("sqlServer"),
    wordpress: makeNodeComponent("wordpress"),
    wordpressDotCom: makeNodeComponent("wordpressDotCom"),

    // Metadata about props expected for PlasmicDataSourceBrowser
    internalVariantProps: PlasmicDataSourceBrowser__VariantProps,
    internalArgProps: PlasmicDataSourceBrowser__ArgProps,
  }
);

export default PlasmicDataSourceBrowser;
/* prettier-ignore-end */
