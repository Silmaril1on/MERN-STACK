import UserRecentFavorites from "./sections/UserRecentFavorites";
import UserRecentRatings from "./sections/UserRecentRatings";

const ReviewSide = () => {
  return (
    <div className="w-2/5 space-y-4">
      <UserRecentFavorites />
      <UserRecentRatings />
    </div>
  );
};

export default ReviewSide;
