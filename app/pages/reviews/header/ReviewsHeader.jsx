import { IoChevronBackOutline } from "react-icons/io5";
import LinkComponent from "@/app/components/materials/LinkComponent";
import BackgroundContainer from "./components/BackgroundContainer";
import AddReview from "./components/AddReview";
import ReviewsCardBody from "./components/ReviewsCardBody";

const ReviewsHeader = ({ data }) => {
  return (
    <div className="relative px-[10%] pt-5 pb-14">
      <BackgroundContainer data={data} />
      <LinkComponent href={`/artists/${data._id}`}>
        <IoChevronBackOutline size={20} />
        <span>Go Back</span>
      </LinkComponent>
      <ReviewsCardBody data={data} />
      <AddReview data={data} />
    </div>
  );
};

export default ReviewsHeader;
