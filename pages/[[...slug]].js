import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Page from "../components/Page";
import { contentFilePaths, CONTENTS_PATH } from "../utils/mdxUtils";

export default ({ source, frontMatter, currentUrl }) => {
  return <Page source={source} frontMatter={frontMatter} currentUrl={currentUrl} />;
};

export const getStaticProps = async ({ params }) => {
  const curPath = params?.slug ? params.slug : ["index"];

  const contentFilePath = path.join(CONTENTS_PATH, `${curPath.join("/")}.mdx`);
  const source = fs.readFileSync(contentFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      currentUrl: params.slug || null,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = [
    {
      params: { slug: [] },
    },
  ].concat(
    contentFilePaths.map((path) => path.replace(/\.mdx?$/, "")).map((slug) => ({ params: { slug: slug.split("/") } }))
  );
  return {
    paths,
    fallback: false,
  };
};
