"use client";
import { setReviewModal, setWarning } from "@/app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const AddReview = ({ data }) => {
  const dispatch = useDispatch();
  const { name, stageName, _id } = data;
  const { user } = useSelector((store) => store.user);

  const handleReviewForm = () => {
    if (!user) {
      dispatch(setWarning(true));
      return;
    } else {
      dispatch(setReviewModal({ name: name, stageName: stageName, id: _id }));
    }
  };

  return (
    <div>
      <button onClick={handleReviewForm} className="green-btn">
        Add Your Review
      </button>
    </div>
  );
};

export default AddReview;
