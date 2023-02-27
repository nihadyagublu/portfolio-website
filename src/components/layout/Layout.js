import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
