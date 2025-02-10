import Info from "./basicinfo/Info";
import ArtistAvatar from "./basicinfo/ArtistAvatar";
import LeftSlideName from "./basicinfo/LeftSlideName";
import MidSection from "./midsection/MidSection";
import Gallery from "./artistgallery/Gallery";

const ArtistDetailsPage = ({ data }) => {
  return (
    <main className="relative">
      <section className="flex flex-row h-screen max-h-[700px] relative px-[10%]">
        <LeftSlideName data={data} />
        <ArtistAvatar data={data} />
        <Info data={data} />
      </section>
      <MidSection data={data} />
      <Gallery data={data} />
    </main>
  );
};

export default ArtistDetailsPage;
