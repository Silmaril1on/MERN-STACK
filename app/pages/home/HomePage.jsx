import ArtistsSection from "./artistsSection/ArtistsSection";

const HomePage = () => {
  return (
    <section className="flex flex-col overflow-hidden grow bg-neutral-900 py-5">
      <ArtistsSection />
    </section>
  );
};

export default HomePage;
