import Image from "next/image";

const CardImage = ({ item }) => {
  return (
    <div className="w-64 h-64 overflow-hidden">
      <Image
        className="group-hover:scale-110 duration-300"
        src={item.image}
        width={400}
        height={400}
        alt={item.image}
        priority
      />
    </div>
  );
};

export default CardImage;
