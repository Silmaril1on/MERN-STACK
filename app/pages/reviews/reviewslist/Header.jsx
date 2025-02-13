import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";

const Header = ({ data }) => {
  return (
    <div className="p-2 my-5 inline-flex flex-col">
      <Title size={40} className="text-white">
        artist reviews
      </Title>
      <Paragraph>{data.length} Reviews</Paragraph>
    </div>
  );
};

export default Header;
