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
        </Head>
        <Nav />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
