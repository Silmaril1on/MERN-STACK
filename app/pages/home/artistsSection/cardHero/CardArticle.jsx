import StageName from "@/app/components/artistcomponents/StageName";
import CardRatings from "./CardRatings";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";

const CardArticle = ({ item, onRate }) => {
  return (
    <article className="space-y-1 w-full">
      <StageName
        className="text-2xl text-lightgray group-hover:text-white duration-300 leading-6"
        item={item}
      />
      <NationalityDetails className="text-[12px]" item={item} />
      <CardRatings onRate={onRate} item={item} />
    </article>
  );
};

export default CardArticle;
