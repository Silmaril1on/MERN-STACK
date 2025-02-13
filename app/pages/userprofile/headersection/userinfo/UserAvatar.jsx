import PinkSvg from "@/app/components/materialcomponents/PinkSvg";
import Image from "next/image";

const UserAvatar = ({ data }) => {
  return (
    <div className="w-48 h-52 p-1 relative">
      <PinkSvg />
      {data?.image ? (
        <Image
          className="hover-image w-full h-full object-cover"
          src={data.image}
          alt="user-avatar"
          width={400}
          height={400}
          priority
        />
      ) : (
        <div className="flex-center">
          <h1>upload your image</h1>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
