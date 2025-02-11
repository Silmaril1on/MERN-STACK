import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import CardDetails from "./CardDetails";
import Link from "next/link";
import WhiteSvg from "@/app/components/materials/WhiteSvg";

const Card = ({ favorites, setFavorites }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {favorites.map((item) => (
        <Link key={item._id} href={`/artists/${item._id}`}>
          <div className="flex flex-row group bg-neutral-900 relative">
            <WhiteSvg />
            <div className="w-[35%] h-[100px] overflow-hidden m-1">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                priority
                quality={100}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
              />
            </div>
            <div className="grow py-2 px-1 relative ">
              <CardDetails item={item} />
              <RemoveButton item={item} setFavorites={setFavorites} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
