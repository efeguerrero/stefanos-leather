import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
