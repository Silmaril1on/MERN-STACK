import { setRateModal } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";

const RatingSection = () => {
  const dispatch = useDispatch();

  const onArtistRate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setRateModal(true));
  };

  return (
    <div onClick={onArtistRate} className=" py-2 relative">
      <h1 className="group-hover:text-green">rate</h1>
    </div>
  );
};

export default RatingSection;
