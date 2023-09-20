//Next Imports
import Head from "next/head";

//Component Imports
import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <section className="flex min-h-[100dvh] flex-col">
        <Head>
          <title>Stefanos Leather</title>
          {/* <!-- Meta Tags --> */}
          <meta name="description" content="Argentine Leather To The World" />
          <meta
            name="keywords"
            content="leather, cow, sheep, cotton, rug, handbag, pillow, raw, import, export , argentina, lamb, bkf, hat, commerce, shop, buenos aires, stefanos, stefanos leather, tote, handcraft"
          />
          <meta property="og:site_name" content="Stefanos Leather" />
          <meta property="og:title" content="Stefanos Leather" />
          <meta
            property="og:description"
            content="Argentine Leather To The World"
          />
          <meta
            property="og:image"
            content="https://leather-preview.vercel.app/assets/images/brand/ogImage.png"
          />
          <meta property="og:image:type" content="png" />
          <meta property="og:image:width" content="50" />

          <meta
            name="twitter:image"
            content="https://leather-preview.vercel.app/assets/images/brand/ogImage.png"
          />
          <meta name="twitter:image:type" content="png" />
          <meta name="twitter:image:width" content="50" />
        </Head>
        <Nav />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
