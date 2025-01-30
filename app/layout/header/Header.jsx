import Navigation from "./navigation/Navigation";
import UserPanel from "./userpanel/UserPanel";

const Header = () => {
  return (
    <header className="flex-between base-padding">
      <Navigation />
      <UserPanel />
    </header>
  );
};

export default Header;
