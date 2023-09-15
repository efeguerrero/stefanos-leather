//Component Imports
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <section className="flex min-h-[100dvh] flex-col">
        <Nav />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
