import PurpleSvg from "@/app/components/materials/PurpleSvg";
import Link from "next/link";
import CardImage from "./cardHero/CardImage";
import CardArticle from "./cardHero/CardArticle";
import AddToSection from "./addToSection/AddToSection";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";

const CardBody = ({ artists, setArtists, itemsPerPage, currentIndex }) => {
  const dispatch = useDispatch();
  const cardWidth = 236;
  const cardMargin = 8;

  return (
    <div
      className="overflow-hidden relative flex items-center"
      style={{ width: `${(cardWidth + 2 * cardMargin) * itemsPerPage}px` }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out relative z-[5]"
        style={{
          transform: `translateX(-${
            currentIndex * (cardWidth + 2 * cardMargin)
          }px)`,
          width: `${(cardWidth + 2 * cardMargin) * artists?.length}px`,
        }}
      >
        {artists?.map((item) => (
          <Link
            key={item._id}
            href={`/artists/${item._id}`}
            style={{
              width: `${cardWidth}px`,
              margin: `0 ${cardMargin}px`,
            }}
          >
            <div className="text-lightgray group bg-neutral-900 relative p-1">
              <PurpleSvg />
              <CardImage item={item} />
              <CardArticle
                item={item}
                onRate={() =>
                  dispatch(
                    setSelectedArtistId({
                      id: item._id,
                      name: item.name,
                      ratingStats: item.ratingStats,
                      stageName: item.stageName,
                    })
                  )
                }
              />
              <AddToSection item={item} setArtists={setArtists} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
