import MetaScoreColors from "@/app/components/MetaScoreColors";

const CardRatings = ({ item, onRate }) => {
  const { ratingStats } = item;
  const totalScore = ratingStats.totalRatings;
  const metaScore = ratingStats.metaScore;

  const onArtistRate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRate();
  };

  return (
    <div onClick={onArtistRate} className="relative cursor-pointer">
      <div className="flex items-center space-x-3">
        <MetaScoreColors metaScore={metaScore} />
        <span className="text-sm font-light text-gray-400">
          {totalScore > 0 ? totalScore : ""}{" "}
          {totalScore > 0 ? "Listeners Score" : "No Ratings"}
        </span>
      </div>
    </div>
  );
};

export default CardRatings;
