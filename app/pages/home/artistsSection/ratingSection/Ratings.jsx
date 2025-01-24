import Close from "@/app/components/Close";
import { setRateModal } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { modalAnimation } from "@/app/(routes)/animations/motionValues";
import { useState } from "react";

const Ratings = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [metaScore, setMetaScore] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
    // Convert 1-10 rating to 1-100 scale
    setMetaScore(value * 10);
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex-center"
    >
      <div className="bg-blue p-8 rounded-lg relative">
        <div className="absolute top-4 right-4">
          <Close onClick={() => dispatch(setRateModal(null))} />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold text-green">Rate this Artist</h2>

          {/* Current Rating Display */}
          <div className="text-center">
            <span className="text-4xl font-bold text-green">{rating}</span>
            <span className="text-xl text-gray-400">/10</span>
          </div>

          {/* Metacritic Score Display */}
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
              metaScore >= 75
                ? "bg-green/20 text-green"
                : metaScore >= 50
                ? "bg-yellow-500/20 text-yellow-500"
                : "bg-red-500/20 text-red-500"
            }`}
          >
            {metaScore}
          </div>

          {/* Rating Radio Buttons */}
          <div className="flex space-x-2">
            {[...Array(10)].map((_, index) => {
              const value = index + 1;
              return (
                <label key={value} className="relative group cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => handleRatingChange(value)}
                    className="sr-only" // Hide the actual radio button
                  />
                  <div
                    className={`w-8 h-8 flex items-center justify-center border-2 ${
                      rating === value
                        ? "border-green bg-green/20 text-green"
                        : "border-gray-600 hover:border-green/50"
                    }`}
                  >
                    {value}
                  </div>
                </label>
              );
            })}
          </div>

          {/* Submit Button */}
          <button className="green-btn mt-4 px-8 py-2" disabled={!rating}>
            Submit Rating
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Ratings;
