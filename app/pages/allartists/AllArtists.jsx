import Image from "next/image";
import Link from "next/link";

const AllArtists = ({ data }) => {
  return (
    <div className="flex-center space-x-5">
      <div className="grid grid-cols-5 place-items-center gap-3 w-[70%] bg-neutral-900 py-3">
        {data.map((item) => {
          const displayName = item?.stageName || item?.name;
          return (
            <div
              key={item._id}
              className="flex-center flex-col group w-44 h-52 relative p-1"
            >
              <Link href={`/artists/${item._id}`}>
                <div className="w-full h-44 overflow-hidden">
                  <Image
                    className="brightness-90 w-full h-full object-cover hover:brightness-100 duration-300 hover:scale-105"
                    src={item.image}
                    width={400}
                    height={400}
                    quality={100}
                    priority
                    alt={item.name}
                  />
                </div>
                <h1 className="text-center font-tetriary text-xl group-hover:text-white text-lightgray duration-300">
                  {displayName}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllArtists;
