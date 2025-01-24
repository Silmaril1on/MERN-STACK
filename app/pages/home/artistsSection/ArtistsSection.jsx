"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AddToSection from "./addToSection/AddToSection";
import CardImage from "./cardHero/CardImage";
import CardArticle from "./cardHero/CardArticle";
import PurpleSvg from "@/app/components/materials/PurpleSvg";
import RatingSection from "./ratingSection/RatingSection";

const ArtistsSection = ({ artistsData }) => {
  const { user } = useSelector((store) => store.user);
  const [artists, setArtists] = useState(artistsData);

  // Initialize artists with their favorite status
  useEffect(() => {
    if (user) {
      const fetchArtistsWithFavorites = async () => {
        try {
          const response = await fetch("http://localhost:3500/api/artists", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setArtists(data);
          }
        } catch (error) {
          console.error("Error fetching artists:", error);
        }
      };
      fetchArtistsWithFavorites();
    } else {
      setArtists(artistsData);
    }
  }, [user, artistsData]);

  return (
    <div>
      <div className="flex-center flex-row space-x-2">
        {artists.map((item) => (
          <Link key={item._id} href={`/artists/${item._id}`}>
            <div className="text-white/80 bg-neutral-900 group p-2 relative">
              <PurpleSvg />
              <CardImage item={item} />
              <CardArticle item={item} />
              <RatingSection />
              <AddToSection item={item} setArtists={setArtists} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
