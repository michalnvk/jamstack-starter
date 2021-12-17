import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

import Footer from "../Footer";
import Header from "../Header";
import LayoutDefault from "../LayoutDefault";
import { NextSeo } from "next-seo";

import { createGlobalStyle } from "styled-components";

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
        <GlobalStyle />
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

// Project global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Noto Sans Display', sans-serif;
    --font-secondary: 'Poppins', sans-serif;

    --font-size-sm: 13px;
    --font-size-md: 16px;
    --font-size-lg: 22px;
    --font-size-xl: 32px;
    --font-size-xxl: 45px;

    --line-height-text: 150%;
    --line-height-headlines: 90%;

    --font-weight-normal: 300;
    --font-weight-semi: 500;
    --font-weight-bold: 700;

    --color-primary: #ccc;
    --color-primary-highlight: #aaa;
    --color-primary-light: #ddd;
    --color-text: #444;
    --color-border: #444;

    --transition: .3s;
    --border-radius: 3px;

    --space-xs: 5px;
    --space-sm: 10px;
    --space-md: 20px;
    --space-lg: 40px;
    --space-xl: 80px;
    --space-xxl: 120px;

    --content-max-width: 1400px;
    --content-narrow-width: 700px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  
  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    line-height: var(--line-height-text);
    font-weight: var(--font-weight-normal)
  }
  
  h1, h2, h3, h4, p, ol, ul {
    margin-bottom: var(--space-md);
  }

  h1, h2, h3, h4 {
    font-family: var(--font-secondary);  
  }

  h1 {
    font-size: var(--font-size-xxl);
  }
  h2 {
    font-size: var(--font-size-xl);
  }
  h3 {
    font-size: var(--font-size-lg);
  }

`;
