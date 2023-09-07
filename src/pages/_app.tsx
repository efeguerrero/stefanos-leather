import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

//Layout Import
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${inter.variable} scroll-smooth font-inter`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
