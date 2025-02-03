import Link from "next/link";
import Close from "./Close";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setWarning } from "../features/modalSlice";
import { modalAnimation } from "../animations/motionValues";

const LoginWarning = () => {
  const dispatch = useDispatch();

  const handleclose = () => {
    dispatch(setWarning(null));
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed flex-center right-10 bottom-10 green-btn text-white p-5 z-20"
    >
      <section className="flex-center flex-col mr-3">
        <div>
          <Link onClick={handleclose} className="link-green" href="/login">
            LOGIN
          </Link>{" "}
          <span>here</span>
        </div>
        <div className="flex-center flex-col">
          <span>Dont have an account ?</span>
          <div className="space-x-2">
            <Link onClick={handleclose} href="/signup" className="link-green">
              SIGN UP
            </Link>
            <span>here</span>
          </div>
        </div>
      </section>
      <Close onClick={handleclose} />
    </motion.div>
  );
};

export default LoginWarning;
