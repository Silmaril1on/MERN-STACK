import ArtistDetailsPage from "@/app/pages/artist/ArtistDetailsPage";
import { capitalizeTitle } from "@/app/helpers/helper";

const fetchSignleArtist = async (id) => {
  const response = await fetch(`http://localhost:3500/api/artists/${id}`);
  const data = await response.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const artistData = await fetchSignleArtist(id);
  const artistName = capitalizeTitle(artistData.name);
  return {
    title: `DJDB - ${artistName}`,
  };
};

const SingleArtistPage = async ({ params }) => {
  const { id } = await params;
  const artistData = await fetchSignleArtist(id);

  return <ArtistDetailsPage data={artistData} />;
};

export default SingleArtistPage;
