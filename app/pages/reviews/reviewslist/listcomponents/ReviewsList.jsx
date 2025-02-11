import List from "./List";

const ReviewsList = ({ reviewsData, data }) => {
  const displayName = data.stageName || data.name;

  return (
    <div className="w-3/5 space-y-10 flex-center  pr-20">
      {reviewsData.length > 0 ? (
        <List reviewsData={reviewsData} data={data} />
      ) : (
        <div className="w-full space-y-2 flex-col h-full flex-center content-bg border">
          <span className="text-5xl font-secondary">No Reviews</span>
          <h1>
            Be the first to review{" "}
            <span className="italic text-white font-bold">{displayName}</span>{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
