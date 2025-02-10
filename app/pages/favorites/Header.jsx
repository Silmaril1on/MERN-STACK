import { useSelector } from "react-redux";

const Header = () => {
  const { userDetails } = useSelector((store) => store.user);
  const favLength = userDetails?.favorites?.length;

  return (
    <div>
      <h1 className="text-2xl capitalize">
        {userDetails.username}'s Favorites Artists
      </h1>
      <span className="text-sm">You have {favLength} Favorite Artists </span>
    </div>
  );
};

export default Header;
