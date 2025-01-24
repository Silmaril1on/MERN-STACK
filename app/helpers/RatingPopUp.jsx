"use client";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Ratings from "../pages/home/artistsSection/ratingSection/Ratings";

const RatingPopUp = () => {
  const { rateModal } = useSelector((store) => store.modal);
  return <AnimatePresence>{rateModal && <Ratings />}</AnimatePresence>;
};

export default RatingPopUp;
