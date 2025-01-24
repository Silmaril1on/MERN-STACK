import Spinner from "@/app/components/Spinner";
import { setWarning } from "@/app/features/modalSlice";
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
      const response = await fetch(
        `http://localhost:3500/api/artists/${artistId}/favorite`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to toggle favorite");
      }
      const data = await response.json();
      setArtists((prevArtists) =>
        prevArtists.map((artist) =>
          artist._id === artistId
            ? { ...artist, isFavorite: data.isFavorite }
            : artist
        )
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    } finally {
      setLoad((prev) => ({ ...prev, [artistId]: false }));
    }
  };

  return (
    <div className="h-full flex-center group-hover:text-white duration-300 w-8 absolute -left-1">
      <button
        className=" *:text-2xl"
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
