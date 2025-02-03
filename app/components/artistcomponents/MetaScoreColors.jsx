const MetaScoreColors = ({ item, className }) => {
  const metaScore = item?.ratingStats?.metaScore;
  const totalScore = item?.ratingStats?.totalRatings;

  return (
    <div className="flex items-center space-x-3 font-primary">
      <div
        className={`py-1 w-10 flex-center rounded text-md font-bold ${
          metaScore >= 75
            ? "bg-green/20 text-green"
            : metaScore >= 45
            ? "bg-purple/20 text-purple"
            : "bg-pink/20 text-pink"
        }`}
      >
        {metaScore}
      </div>
      <span className={`text-sm font-light ${className}`}>
        {totalScore > 0 ? totalScore : ""}{" "}
        {totalScore > 0 ? "Listeners Score" : "No Ratings"}
      </span>
    </div>
  );
};

export default MetaScoreColors;
