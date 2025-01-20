"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setError } from "../features/modalSlice";
import { IoMdClose } from "react-icons/io";

const ErrorMsg = ({ error }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setError(null));
  };

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="border-red-500 border font-secondary absolute right-10 bottom-10 text-red-500 text-xl font-light bg-red-400/30 px-5 py-2 flex-center space-x-3"
        >
          <h1>{error}</h1>
          <IoMdClose
            className="cursor-pointer hover:rotate-90 duration-300"
            onClick={handleClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMsg;
