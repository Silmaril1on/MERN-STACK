import MetaScoreColors from "@/app/components/artistcomponents/MetaScoreColors";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import StageName from "@/app/components/artistcomponents/StageName";

const CardDetails = ({ item }) => {
  return (
    <article className="flex flex-col text-lightgray *:duration-300 h-full">
      <StageName className="text-3xl group-hover:text-white" item={item} />
      <NationalityDetails className="text-[12px] mb-1" item={item} />
      <MetaScoreColors item={item} />
    </article>
  );
};

export default CardDetails;
