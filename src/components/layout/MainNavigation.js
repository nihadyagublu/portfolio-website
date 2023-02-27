import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NewSideMenu from "./NewSideMenu";
import { Link } from "react-scroll";

function MainNavigation() {
  const [backdropOpen, setBackdropOpen] = useState(false);

  const showMenu = () => {
    setBackdropOpen(true);
  };

  const exitMenu = () => {
    setBackdropOpen(false);
  };

  return (
    <>
      <header className="mainHeader">
        <div className="leftSign">N.Y.</div>

        <nav className="titleNav">
          <ul className="rightNavList">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                {" "}
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                ABOUT{" "}
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
              >
                {" "}
                PROJECTS
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                CONTACT
              </Link>{" "}
            </li>
          </ul>
        </nav>
        <nav className="rightNavIcon">
          <MenuIcon className="MenuIcon" onClick={showMenu} />
        </nav>
      </header>

      <AnimatePresence>
        {backdropOpen && <NewSideMenu onClick={exitMenu} />}
      </AnimatePresence>
    </>
  );
}

export default MainNavigation;
