import type { ReactElement, ReactNode } from "react";

//Next Imports
import type { NextPage, InferGetStaticPropsType } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export type NextPageWithLayout<Props extends (args: any) => any> = NextPage<
  InferGetStaticPropsType<Props>
> & {
  getLayout?: (
    page: React.ReactElement,
    props: InferGetStaticPropsType<Props>,
  ) => React.ReactNode;
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Analytics />
    </>,
    pageProps,
  );
}
