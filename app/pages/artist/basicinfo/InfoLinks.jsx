import LinkComponent from "@/app/components/materials/LinkComponent";
import { FaBookOpen, FaCalendar } from "react-icons/fa";

const InfoLinks = ({ data }) => {
  return (
    <div className="absolute w-full left-0 top-1 h-10 flex flex-row items-center justify-end space-x-10 pr-5">
      <LinkComponent href={`/artists/${data._id}/reviews`}>
        <FaBookOpen />
        <span>Reviews</span>
      </LinkComponent>
      <LinkComponent href={`/artists/${data._id}/reviews`}>
        <FaCalendar />
        <span>Tours</span>
      </LinkComponent>
    </div>
  );
};

export default InfoLinks;
