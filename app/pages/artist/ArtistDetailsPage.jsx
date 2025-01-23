import Image from "next/image";

const ArtistDetailsPage = ({ data }) => {
  return (
    <div className="h-full flex-col flex-center">
      <h1 className="text-5xl">{data.name}</h1>
      <div>
        <Image
          width={400}
          height={400}
          src={data.image}
          alt={data.name}
          priority
        />
      </div>
    </div>
  );
};

export default ArtistDetailsPage;
