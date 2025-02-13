import Spotlight from "@/app/components/materialcomponents/Spotlight";
import List from "./List";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Title from "@/app/components/uicomponents/Title";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const ReviewsList = ({ reviewsData, data }) => {
  const displayName = data.stageName || data.name;

  return (
    <div className="w-3/5 space-y-10 pr-20">
      {reviewsData.length > 0 ? (
        <List reviewsData={reviewsData} data={data} />
      ) : (
        <Spotlight className="w-full space-y-2 flex-col py-20 flex-center relative bg-black shadow-sm shadow-neutral-600/60">
          <WhiteSvg />
          <div className="pointer-events-none flex-center flex-col">
            <Title size={50}>No Reviews</Title>
            <Paragraph>
              Be the first to review{" "}
              <span className="italic text-white font-bold">{displayName}</span>{" "}
            </Paragraph>
          </div>
        </Spotlight>
      )}
    </div>
  );
};

export default ReviewsList;
