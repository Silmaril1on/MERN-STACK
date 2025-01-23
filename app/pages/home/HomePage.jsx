import ArtistsSection from "./artistsSection/ArtistsSection";

const HomePage = ({ artistsData }) => {
  return (
    <section className="flex flex-col grow">
      <ArtistsSection artistsData={artistsData} />
    </section>
  );
};

export default HomePage;
