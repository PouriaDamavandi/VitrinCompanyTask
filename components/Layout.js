import Nav from "./Nav";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
        <Header />
      </div>
    </>
  );
};

export default Layout;
