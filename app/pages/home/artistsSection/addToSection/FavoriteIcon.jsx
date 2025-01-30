import Spinner from "@/app/components/Spinner";
import { setWarning } from "@/app/features/modalSlice";
import { updateFavorites } from "@/app/features/userSlice";
import { toggleFavorite } from "@/app/utils/api";
import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const FavoriteIcon = ({ item, setArtists }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [load, setLoad] = useState({});

  const onAddToFavorites = async (e, artistId) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      dispatch(setWarning(true));
      return;
    }
    setLoad((prev) => ({ ...prev, [artistId]: true }));
    try {
      const data = await toggleFavorite(artistId, user.token);
      // Update artist list
      setArtists((prevArtists) =>
        prevArtists.map((artist) =>
          artist._id === artistId
            ? { ...artist, isFavorite: data.isFavorite }
            : artist
        )
      );
      // Update Redux state with updated favorites array
      dispatch(updateFavorites(data.favorites));
    } catch (error) {
      console.error("Error toggling favorite:", error);
    } finally {
      setLoad((prev) => ({ ...prev, [artistId]: false }));
    }
  };

  return (
    <div className="h-full flex-center group-hover:text-white duration-300 w-8 absolute -left-1">
      <button
        className=" *:text-xl"
        onClick={(e) => onAddToFavorites(e, item._id)}
        disabled={load[item._id]}
      >
        {load[item._id] ? (
          <Spinner />
        ) : (
          <>{item.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}</>
        )}
      </button>
    </div>
  );
};

export default FavoriteIcon;
