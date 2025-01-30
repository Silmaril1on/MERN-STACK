import Image from "next/image";
import CardRatings from "./CardRatings";

const CardArticle = ({ item, onRate }) => {
  const { name, flag, country, city, stageName } = item;

  return (
    <article>
      <h1 className="uppercase font-secondary text-2xl group-hover:text-white duration-300">
        {stageName ? stageName : name}
      </h1>
      <section className="flex flex-row">
        <div className="w-6">
          <Image src={flag} width={100} height={100} alt={flag} priority />
        </div>
        <div className="*:text-[12px] flex-center pl-2 space-x-1 capitalize group-hover:text-white duration-300">
          <span>{country}</span>, <span>{city}</span>
        </div>
      </section>
      <CardRatings onRate={onRate} item={item} />
    </article>
  );
};

export default CardArticle;
