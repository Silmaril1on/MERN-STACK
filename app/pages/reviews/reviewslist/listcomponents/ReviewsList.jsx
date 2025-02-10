import List from "./List";

const ReviewsList = ({ reviewsData, data }) => {
  return (
    <div className="w-3/5 space-y-10 pr-20">
      <List reviewsData={reviewsData} data={data} />
    </div>
  );
};

export default ReviewsList;
