import ArtistsSection from "./artistsSection/ArtistsSection";

const HomePage = () => {
  return (
    <section className="flex flex-col overflow-hidden grow py-5">
      <ArtistsSection />
    </section>
  );
};

export default HomePage;
