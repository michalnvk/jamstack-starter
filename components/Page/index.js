import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

import Header from "../Header";
import Footer from "../Footer";
import LayoutDefault from "../LayoutDefault";
import { NextSeo } from "next-seo";

import FrontMatterProvider from "../../contexts/frontMatterContext";
import I18nProvider from "../../contexts/i18nContext";

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

export default function Page({
  source,
  frontMatter,
  i18n,
  currentUrl,
  children,
}) {
  const ContentLayout =
    layouts[frontMatter?.layout ? frontMatter.layout : "default"];
  //default SEO title, desctiption, share image
  const meta = {
    title: frontMatter.title ? frontMatter.title : i18n.defaultTitle,
    description: frontMatter.description
      ? frontMatter.description
      : i18n.defaultDescription,
    image: frontMatter.image ? frontMatter.image : i18n.defaultOgImage,
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
      <I18nProvider i18n={i18n}>
        <Header />
        <FrontMatterProvider frontMatter={frontMatter}>
          <ContentLayout currentUrl={currentUrl}>
            {children ? (
              children
            ) : (
              <MDXRemote {...source} components={components} />
            )}
          </ContentLayout>
        </FrontMatterProvider>
        <Footer />
      </I18nProvider>
    </>
  );
}
