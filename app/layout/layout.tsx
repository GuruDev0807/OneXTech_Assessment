import Header from "./header";
// import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <main className="flex flex-col w-full bg-white">
      <Header />
      <div className="flex flex-col w-full">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
