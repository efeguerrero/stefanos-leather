import { Html, Head, Main, NextScript } from "next/document";

import { inter } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className={`${inter.variable} scroll-smooth font-inter`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
