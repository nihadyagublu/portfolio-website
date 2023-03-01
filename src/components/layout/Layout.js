import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
