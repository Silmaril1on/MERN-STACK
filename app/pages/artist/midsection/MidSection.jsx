import ArtistBiography from "./ArtistBiography";

const MidSection = ({ data }) => {
  return (
    <div className="mt-10 px-[10%] bg-lightgray">
      <ArtistBiography data={data} />
    </div>
  );
};

export default MidSection;
