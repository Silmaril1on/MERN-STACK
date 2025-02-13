"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { setReviewModal } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { modalAnimation } from "@/app/animations/motionValues";
import Close from "@/app/components/uicomponents/Close";
import ReviewInputs from "./ReviewInputs";
import PurpleSvg from "@/app/components/materialcomponents/PurpleSvg";

const ReviewsForm = ({ item }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black/70"
    >
      <div className="relative flex-center h-full backdrop-blur-lg">
        <div className="py-10 px-20 relative bg-blue/40">
          <Close
            className="text-purple absolute z-[3] top-2 right-2"
            onClick={() => dispatch(setReviewModal(null))}
          />
          <PurpleSvg />
          <ReviewInputs item={item} setError={setError} />
        </div>
        {error && <ErrorMsg error={error} setError={setError} />}
      </div>
    </motion.div>
  );
};

const ErrorMsg = ({ error, setError }) => {
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [error]);

  return (
    <div className="border-red-500 border font-secondary absolute right-10 bottom-10 text-red-500 text-xl font-light bg-red-400/30 px-5 py-2 flex-center space-x-3 z-20">
      {error}
    </div>
  );
};

export default ReviewsForm;
