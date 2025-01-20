import Logo from "@/app/components/Logo";
import Navigation from "./navigation/Navigation";
import UserPanel from "./userpanel/UserPanel";

const Header = () => {
  return (
    <header className="flex-between py-5 space-x-5">
      <Navigation />
      <UserPanel />
    </header>
  );
};

export default Header;
