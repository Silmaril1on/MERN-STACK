import HorizontalLine from "@/app/components/materials/HorizontalLine";
import React from "react";
import ReviewLikeButtons from "./ReviewLikeButtons";

const List = ({ reviewsData, data }) => {
  const capitalizeAfterPunctuation = (text) => {
    return text.replace(/(?:^|\.\s|\n)([a-z])/g, (match, p1) =>
      match.toUpperCase()
    );
  };

  return (
    <>
      {reviewsData.map((item) => {
        const { username, comment, header, createdAt, _id } = item;
        return (
          <div className="relative space-y-3 content-bg px-4 py-3" key={_id}>
            <article className="relative py-3 flex-center flex-col">
              <HorizontalLine className="w-2/4 absolute bottom-0" />
              <h1 className="font-bold my-2 uppercase font-tetriary text-white text-2xl">
                {header}
              </h1>
              <p className="text-[12px] whitespace-pre-wrap w-full">
                {capitalizeAfterPunctuation(comment)}
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
    </>
  );
};

export default List;
