import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

import Header from "../Header";
import Footer from "../Footer";
import LayoutDefault from "../LayoutDefault";
import { NextSeo } from "next-seo";

import FrontMatterProvider from "../../contexts/frontMatterContext";

const components = {
  Background: dynamic(() => import("../Background")),
  Block: dynamic(() => import("../Block")),
  Button: dynamic(() => import("../Button")),
  Container: dynamic(() => import("../Container")),
  Grid: dynamic(() => import("../Grid")),
  Separator: dynamic(() => import("../Separator")),
  Space: dynamic(() => import("../Space")),
};

const layouts = {
  default: LayoutDefault,
  //add custom layouts here
};

export default function Layout({ source, frontMatter, currentUrl, children }) {
  const ContentLayout = layouts[frontMatter?.layout ? frontMatter.layout : "default"];
  //default SEO title, desctiption, share image
  const meta = {
    title: frontMatter.title ? frontMatter.title : "TITLE",
    description: frontMatter.description ? frontMatter.description : "DESCRIPTION",
    image: frontMatter.image
      ? frontMatter.image
      : "OGIMAGE",
  };

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: "website",
          url: "URL",
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: meta.image,
            },
          ],
        }}
      />
      <Header />
      <FrontMatterProvider frontMatter={frontMatter}>
        <ContentLayout currentUrl={currentUrl}>
          {children ? children : <MDXRemote {...source} components={components} />}
        </ContentLayout>
      </FrontMatterProvider>
      <Footer />
    </>
  );
}
