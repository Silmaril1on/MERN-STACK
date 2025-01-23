import HomePage from "./pages/home/HomePage";

const fetchArtists = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://localhost:3500/api/artists");
  const data = await response.json();
  return data;
};

export default async function Home() {
  const artistsData = await fetchArtists();
  return <HomePage artistsData={artistsData} />;
}
