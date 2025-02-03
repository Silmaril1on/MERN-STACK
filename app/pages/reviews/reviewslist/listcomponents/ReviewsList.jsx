import HorizontalLine from "@/app/components/materials/HorizontalLine";
import ReviewLikeButtons from "./ReviewLikeButtons";

const ReviewsList = ({ reviewsData, data }) => {
  return (
    <div className="w-3/5 space-y-5">
      {reviewsData.map((item) => {
        const { username, comment, header, createdAt, _id } = item;
        return (
          <div
            className="relative space-y-3 border rounded-sm border-lightgray/20 px-4 py-3"
            key={_id}
          >
            <article className="relative py-3 flex-center flex-col">
              <HorizontalLine className="w-2/4 absolute bottom-0" />
              <h1 className="font-bold my-2 uppercase font-tetriary text-white text-2xl">
                {header}
              </h1>
              <p className="text-sm whitespace-pre-wrap w-full capitalize">
                {comment}
              </p>
              <ReviewLikeButtons review={item} artistId={data._id} />
            </article>
            <article className="flex-center flex-row space-x-3">
              <h1 className="text-white font-tetriary capitalize">
                {username}
              </h1>
              <span>•</span>
              <span className="text-sm">{createdAt.split("T")[0]}</span>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
