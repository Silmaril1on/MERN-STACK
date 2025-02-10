import AllArtists from "@/app/pages/allartists/AllArtists";

const fetchArtists = async () => {
  const response = await fetch("http://localhost:3500/api/artists/", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export const metadata = () => {
  return {
    title: "DJDB - Artists",
  };
};

const AllArtistsPage = async () => {
  const data = await fetchArtists();
  return <AllArtists data={data} />;
};

export default AllArtistsPage;
