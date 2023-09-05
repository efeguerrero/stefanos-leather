import Nav from "@/components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
