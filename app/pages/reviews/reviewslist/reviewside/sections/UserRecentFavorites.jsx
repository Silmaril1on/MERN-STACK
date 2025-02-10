"use client";
import Spinner from "@/app/components/Spinner";
import Image from "next/image";
import Link from "next/link";
import { fetchRecentFavorites } from "@/app/utils/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";

const UserRecentFavorites = () => {
  const [recents, setRecents] = useState(null);
  const { user } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecents = async () => {
      if (!user?.token) return;
      setLoading(true);
      try {
        const data = await fetchRecentFavorites(user.token);
        setRecents(data);
      } catch (error) {
        console.error("Error fetching recent favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecents();
  }, [user?.token]);

  console.log(recents);

  return (
    <div className="px-5 content-bg py-3">
      <h1 className="capitalize text-2xl font-tetriary">
        Your Recent Favorites
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {recents ? (
            <motion.div
              variants={staggerOpacity}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-center space-x-4 my-4"
            >
              {recents.map((item) => {
                const { stageName, name, image, _id } = item;
                const displayName = stageName || name;
                return (
                  <motion.div
                    variants={staggerOpacity}
                    key={_id}
                    className="flex-center flex-col"
                  >
                    <Link href={`/artists/${_id}`}>
                      <Image
                        width={150}
                        height={150}
                        alt={name}
                        src={image}
                        className="w-20 h-20 object-cover rounded-full hover-image"
                      />
                      <h1 className="text-sm text-center font-secondary">
                        {displayName}
                      </h1>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <h1>no recents</h1>
          )}
        </>
      )}
    </div>
  );
};

export default UserRecentFavorites;
