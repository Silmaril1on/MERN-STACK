import Link from "next/link";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const UserFavoritesPanel = () => {
  const { userDetails } = useSelector((store) => store.user);

  return (
    <Link href="/favorites">
      <div className="flex-center flex-row px-2 space-x-2 ">
        <MdFavoriteBorder size={23} />
        <span>{userDetails?.favorites?.length}</span>
        <h1>favorites</h1>
      </div>
    </Link>
  );
};

export default UserFavoritesPanel;
