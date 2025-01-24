import FavoriteIcon from "./FavoriteIcon";

const AddToSection = ({ item, setArtists }) => {
  return (
    <div className="flex justify-start w-full h-8 mt-1 relative">
      <FavoriteIcon item={item} setArtists={setArtists} />
    </div>
  );
};

export default AddToSection;
