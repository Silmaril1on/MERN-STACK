import ArtistDetailsPage from "@/app/pages/artist/ArtistDetailsPage";
import { capitalizeTitle } from "@/app/helpers/helper";

const fetchSingleArtist = async (id) => {
  const response = await fetch(`http://localhost:3500/api/artists/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const artistData = await fetchSingleArtist(id);
  const artistName = capitalizeTitle(artistData.name);
  return {
    title: `DJDB - ${artistName}`,
  };
};

const SingleArtistPage = async ({ params }) => {
  const { id } = await params;
  const artistData = await fetchSingleArtist(id);

  return <ArtistDetailsPage data={artistData} />;
};

export default SingleArtistPage;
