import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDetails } from "@/app/features/userSlice";
import { fetchUserDetails } from "@/app/utils/api";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import UserSettingsPanel from "./UserSettingsPanel";

const UsernamePanel = () => {
  const { user } = useSelector((store) => store.user);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  useEffect(() => {
    const userDetails = async () => {
      try {
        const data = await fetchUserDetails(user.token);
        dispatch(getUserDetails(data));
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    userDetails();
  }, [dispatch, user]);

  return (
    <div className="flex-center space-x-4 relative">
      <div
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        className="flex-center space-x-1 cursor-pointer"
      >
        <h1 className="text-2xl font-bold font-tetriary">{user.username}</h1>
        {active ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>
      {active && <UserSettingsPanel setActive={setActive} />}
    </div>
  );
};

export default UsernamePanel;
