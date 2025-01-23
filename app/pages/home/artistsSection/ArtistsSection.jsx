"use client"; // parent client component, need to split the code in future
import Image from "next/image";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setWarning } from "@/app/features/modalSlice";

const ArtistsSection = ({ artistsData }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onAddToFavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      dispatch(setWarning(true));
    }
  };

  return (
    <div>
      <div className="flex-center flex-row space-x-2">
        {artistsData.map((item) => {
          return (
            <Link key={item._id} href={`/artists/${item._id}`}>
              <div className=" border border-green/50 p-2">
                <div className="w-64 h-64">
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    alt={item.image}
                    priority
                  />
                </div>
                <article>
                  <h1 className="uppercase font-secondary text-2xl">
                    {item.name}
                  </h1>
                  <div className="w-6">
                    <Image
                      src={item.flag}
                      width={100}
                      height={100}
                      alt={item.flag}
                      priority
                    />
                  </div>
                  <div className="space-x-2 flex flex-row pt-2 text-green">
                    <MdFavoriteBorder onClick={onAddToFavorites} />
                    <IoMusicalNotesSharp />
                  </div>
                </article>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistsSection;
