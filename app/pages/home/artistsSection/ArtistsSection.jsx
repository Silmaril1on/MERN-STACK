"use client";
import { useState, useEffect } from "react";
import ContainerButtons from "./SliderButtons";
import CardBody from "./CardBody";
import Spinner from "@/app/components/Spinner";

const ArtistsSection = () => {
  const [artists, setArtists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3500/api/artists/", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  console.log(artists);

  return (
    <div className="h-[500px] base-padding ">
      <div className="w-full font-secondary text-lightgray py-3">
        <h1 className="text-2xl">Browse Artists</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <section className="relative flex-center flex-col">
          <CardBody
            artists={artists}
            itemsPerPage={itemsPerPage}
            currentIndex={currentIndex}
          />
          <ContainerButtons
            artists={artists}
            itemsPerPage={itemsPerPage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </section>
      )}
    </div>
  );
};

export default ArtistsSection;
