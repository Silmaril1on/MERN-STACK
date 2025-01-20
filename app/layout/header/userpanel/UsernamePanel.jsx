"use client";
import Button from "@/app/components/Button";
import { useLogout } from "@/app/hooks/useLogOut";
import { useSelector } from "react-redux";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";

const UsernamePanel = () => {
  const { user } = useSelector((store) => store.user);
  const { logout } = useLogout();

  return (
    <div className="flex-center space-x-4">
      <MdFavoriteBorder />
      <IoMusicalNotesSharp />
      <h1 className="text-lg">{user.username}</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default UsernamePanel;
