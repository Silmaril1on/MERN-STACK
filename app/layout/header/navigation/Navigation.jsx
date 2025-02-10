import Logo from "@/app/components/Logo";
import LinkComponent from "@/app/components/materials/LinkComponent";
import Link from "next/link";
import { TbVinyl } from "react-icons/tb";
import { MdFestival } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="flex-center flex-row space-x-4">
      <Logo />

      <LinkComponent href={`/artists`}>
        <TbVinyl />
        <span>Artists</span>
      </LinkComponent>
      <LinkComponent href={`/festivals`}>
        <MdFestival />
        <span>Festivals</span>
      </LinkComponent>

      <Link className="purple-btn" href="/createdj">
        Create DJ
      </Link>
    </div>
  );
};

export default Navigation;
