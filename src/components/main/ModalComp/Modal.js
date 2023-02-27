import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.5, type: "spring", damping: 25, stiffness: 90 },
  },
};

const Modal = (props) => {
  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`modal ${props.modalData.className}`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <header className="modalHeader">
          <h3>{props.modalData.modalTitle}</h3>
        </header>
        <div className="modalBody">
          <p>{props.modalData.modalMessage}</p>
          <div className="modalActions">
            <button onClick={props.handleClose}>Close</button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
