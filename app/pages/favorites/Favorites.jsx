"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUserFavorites } from "@/app/utils/api";
import Spinner from "@/app/components/Spinner";
import Card from "./card/Card";
import Header from "./Header";
import EmptyField from "@/app/components/EmptyField";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((store) => store.user);
  const router = useRouter();

  useEffect(() => {
    const getFavorites = async () => {
      if (!user) {
        router.push("/login");
        return;
      }
      try {
        const data = await fetchUserFavorites(user.token);
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, [user, router]);

  if (loading) {
    return (
      <div className="flex-center grow">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col grow bg-blue base-padding">
      <Header />
      {favorites.length === 0 ? (
        <EmptyField>{user.username} You have No artists selected</EmptyField>
      ) : (
        <Card favorites={favorites} setFavorites={setFavorites} />
      )}
    </div>
  );
};

export default Favorites;
