import ReviewLikeButtons from "./ReviewLikeButtons";
import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Spotlight from "@/app/components/materialcomponents/Spotlight";
import Title from "@/app/components/uicomponents/Title";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const List = ({ reviewsData, data }) => {
  return (
    <>
      {reviewsData.map((item) => {
        const { username, comment, header, createdAt, _id } = item;
        return (
          <Spotlight
            key={_id}
            className="relative bg-black w-full shadow-sm shadow-neutral-600"
          >
            <WhiteSvg />
            <div className="relative space-y-3 px-4 py-3" key={_id}>
              <article className="relative py-3 flex-center text-white flex-col space-y-3">
                <Title size={30}>{header}</Title>
                <Paragraph size={2}>{comment}</Paragraph>
                <HorizontalLine className="w-2/4 absolute bottom-0" />
                <ReviewLikeButtons review={item} artistId={data._id} />
              </article>
              <article className="flex-center flex-row space-x-3">
                <Title size={10}>{username}</Title>
                <span>•</span>
                <Paragraph size={1}>{createdAt.split("T")[0]}</Paragraph>
              </article>
            </div>
          </Spotlight>
        );
      })}
    </>
  );
};

export default List;
