import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Title from "@/app/components/uicomponents/Title";

const Header = () => {
  return (
    <div className="w-2/4 relative flex flex-col space-y-4">
      <Title size={40} third className="leading-3">
        Account Settings
      </Title>
      <Title size={10} third className="text-lightgray">
        update profile
      </Title>
      <HorizontalLine color="pink" />
    </div>
  );
};

export default Header;
