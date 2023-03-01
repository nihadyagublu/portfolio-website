import { motion } from "framer-motion";

function Backdrop(props) {
  return (
    <motion.div
      className="modalBackdrop"
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
}

export default Backdrop;
