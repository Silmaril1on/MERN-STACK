import { motion } from "framer-motion";
import { animatedLetters } from "../animations/motionValues";

const AnimatedLetters = ({ text, className }) => {
  const letters = text.split("");
  return (
    <motion.div
      variants={animatedLetters}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => {
        return (
          <motion.span
            variants={animatedLetters}
            className={className}
            key={index}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedLetters;
