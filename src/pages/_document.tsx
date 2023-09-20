import { Html, Head, Main, NextScript } from "next/document";

import { inter, jakarta } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${inter.variable} ${jakarta.variable} font-jakarta`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
