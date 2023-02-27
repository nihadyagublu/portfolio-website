import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function NewSideMenu({ onClick }) {
  const dropIn = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="menuList">
        <li className="menuListItem">
          <Link
            to="home"
            onClick={onClick}
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            {" "}
            HOME
          </Link>
        </li>
        <li className="menuListItem">
          <Link
            onClick={onClick}
            to="about"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            ABOUT{" "}
          </Link>
        </li>

        <li className="menuListItem">
          <Link
            onClick={onClick}
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
        <li className="menuListItem">
          <Link
            onClick={onClick}
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
    </motion.div>
  );
}
