"use client";
import { useDispatch, useSelector } from "react-redux";
import { setReviewsData } from "@/app/features/modalSlice";
import { useEffect } from "react";
import ReviewsList from "./listcomponents/ReviewsList";
import ReviewSide from "./reviewside/ReviewSide";
import Header from "./Header";

const ReviewsSection = ({ data }) => {
  const dispatch = useDispatch();
  const { reviewsData } = useSelector((store) => store.modal);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3500/api/artists/${data._id}/reviews`
        );
        const revData = await response.json();
        dispatch(setReviewsData(revData.reviews));
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, [data._id]);

  return (
    <div className="bg-neutral-800 text-lightgray px-[10%] base-padding">
      <Header data={reviewsData} />
      <div className="flex flex-row p-2 space-x-2">
        <ReviewsList reviewsData={reviewsData} data={data} />
        <ReviewSide />
      </div>
    </div>
  );
};

export default ReviewsSection;
