import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <main className="flex flex-col w-full bg-white">
      <Header />
      <div className="flex w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
