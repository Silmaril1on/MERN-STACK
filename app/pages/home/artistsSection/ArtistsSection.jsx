"use client";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ContainerButtons from "./SliderButtons";
import CardBody from "./CardBody";
import Spinner from "@/app/components/Spinner";

const ArtistsSection = () => {
  const { user } = useSelector((store) => store.user);
  const [artists, setArtists] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      setError(null);
      const url = "http://localhost:3500/api/artists";
      const options = user
        ? {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        : {};
      try {
        const response = await fetch(url, options);
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
  }, [user]);

  if (error) {
    return <h1>error happened</h1>;
  }

  return (
    <div className="h-[500px] base-padding">
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
            setArtists={setArtists}
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
