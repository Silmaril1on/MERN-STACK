import PinkSvg from "@/app/components/materialcomponents/PinkSvg";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import Link from "next/link";

const UserActivities = ({ data }) => {
  const activities = [
    {
      title: "Your Favorites",
      count: data.favorites.length,
      url: "/favorites",
    },
    {
      title: "Your Reviews",
      count: data.reviews.length,
      url: "/favorites",
    },
    {
      title: "Rated Artists",
      count: data.ratedArtists.length,
      url: "/favorites",
    },
  ];

  return (
    <div>
      <div className="grid gap-6 grid-cols-2 justify-self-center">
        {activities.map(({ title, count, url }, index) => (
          <Link href={url} key={index}>
            <div className="relative w-36 h-24 flex-center flex-col bg-pink/10 hover:bg-pink/20 duration-300">
              <PinkSvg />
              <Title size={10}>{title}</Title>
              <Paragraph size={7} className=" text-pink">
                {count}
              </Paragraph>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserActivities;
