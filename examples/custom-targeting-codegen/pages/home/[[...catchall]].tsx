import { GetStaticPaths, GetStaticProps } from "next";

// Once you setup the splits in your studio project, you can import the following
// component to enable variations for the page.
import PlasmicSplitsProvider from "../../components/plasmic/codegen_custom_targettng/PlasmicSplitsProvider";

import Home from "../_splits/home";

import {
  generateAllPaths,
  rewriteWithoutTraits,
} from "@plasmicapp/loader-edge";

function SplitsHome(props: { traits?: Record<string, string> }) {
  const { traits } = props;

  return (
    <PlasmicSplitsProvider traits={traits}>
      <Home />
    </PlasmicSplitsProvider>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const rawPlasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";

  const { traits } = rewriteWithoutTraits(rawPlasmicPath);

  return {
    props: { traits },
    // For scheduled content to work, you must use revalidate, as
    // the "current time" is not part of the page cache key, and is
    // actually the time when this is run. So we rely on revalidate to
    // invalidate the cached page content and regenerate with a
    // new timestamp.
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = generateAllPaths("/").map((path) => ({
    params: {
      catchall: path.substring(1).split("/"),
    },
  }));
  return {
    // We set `fallback:"blocking"` to generate page variations lazily.
    // Once a page for a specific set of traits has been generated, it
    // will be cached and reused. We use paths to generate some possible
    // paths to be generated already in the build time to avoid the
    // first request to be slow.
    paths,
    fallback: "blocking",
  };
};

export default SplitsHome;
