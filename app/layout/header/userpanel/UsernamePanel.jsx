"use client";
import Button from "@/app/components/Button";
import { useLogout } from "@/app/hooks/useLogOut";
import { useDispatch, useSelector } from "react-redux";
import { IoMusicalNotesSharp } from "react-icons/io5";
import UserFavoritesPanel from "./UserFavoritesPanel";
import { useEffect } from "react";
import { getUserDetails } from "@/app/features/userSlice";
import { fetchUserDetails } from "@/app/utils/api";

const UsernamePanel = () => {
  const { user } = useSelector((store) => store.user);
  const { logout } = useLogout();
  const dispatch = useDispatch();

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
    <div className="flex-center space-x-4  px-2">
      <UserFavoritesPanel />
      <IoMusicalNotesSharp />
      <h1 className="text-lg">{user.username}</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default UsernamePanel;
