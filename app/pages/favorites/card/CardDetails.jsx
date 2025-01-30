import MetaScoreColors from "@/app/components/MetaScoreColors";
import Image from "next/image";

const CardDetails = ({ item }) => {
  const { name, country, flag, city, desc, stageName } = item;
  const metaScore = item.ratingStats.metaScore;
  const totalRating = item.ratingStats.totalRatings;
  console.log(item);

  return (
    <article className="flex flex-col text-lightgray  group-hover:text-white duration-300 h-full">
      <h1 className="text-3xl font-secondary ">
        {stageName ? stageName : name}
      </h1>
      <div className="flex flex-row items-center space-x-1 text-sm font-light capitalize">
        <Image
          src={flag}
          alt="country-flag"
          width={100}
          height={100}
          className="w-6 mr-2"
        />
        <span>{country}</span>,<span>{city}</span>
      </div>
      <div className="flex flex-row mt-1 items-center space-x-2">
        <MetaScoreColors metaScore={metaScore} />
        <span className="text-sm text-lightgray/70">
          {totalRating} Listeners Score
        </span>
      </div>
      <div className="h-full mt-1">
        <p className="text-[10px]">
          {" "}
          {desc.length > 300 ? `${desc.substring(0, 300)}...` : desc}
        </p>
      </div>
    </article>
  );
};

export default CardDetails;
