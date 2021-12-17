import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="author" content="AUTHOR" />
        <meta name="copyright" content="COPYRIGHT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;500;700&family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
