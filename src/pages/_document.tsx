import { Html, Head, Main, NextScript } from "next/document";

import { inter } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Stefanos Leather</title>
      </Head>
      <body className={`${inter.variable}  scroll scroll-smooth font-inter`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
