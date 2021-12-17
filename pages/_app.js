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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;