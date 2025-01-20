import Logo from "@/app/components/Logo";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex-center flex-row space-x-4">
      <Logo />
      <h1>Artists</h1>
      <h1>Festivals</h1>
      <Link className=" font-bold green-btn" href="/createdj">
        Create DJ
      </Link>
    </div>
  );
};

export default Navigation;
