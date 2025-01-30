const MetaScoreColors = ({ metaScore }) => {
  return (
    <div
      className={`py-1 w-10 flex-center rounded font-primary text-md font-bold ${
        metaScore >= 75
          ? "bg-green/20 text-green"
          : metaScore >= 45
          ? "bg-purple/20 text-purple"
          : "bg-pink/20 text-pink"
      }`}
    >
      {metaScore}
    </div>
  );
};

export default MetaScoreColors;
