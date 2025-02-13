import UserRecents from "./UserRecents";
import { fetchRecentFavorites, fetchRecentRates } from "@/app/utils/api";

const ReviewSide = () => {
  return (
    <div className="w-2/5 space-y-10">
      <UserRecents
        title="Your Recent Favorites"
        fetchDataFn={fetchRecentFavorites}
      />
      <UserRecents
        showRating
        title="Your Recent Favorites"
        fetchDataFn={fetchRecentRates}
      />
    </div>
  );
};

export default ReviewSide;
