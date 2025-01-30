"use client";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CardRatings from "../../home/artistsSection/cardHero/CardRatings";
import Image from "next/image";
import AnimatedWords from "@/app/components/AnimatedWords";
import SocialsMedia from "./SocialsMedia";
import Link from "next/link";

const Info = ({ data }) => {
  const dispatch = useDispatch();
  const { label, name, stageName, desc, flag, country, city } = data;

  const onRate = () => {
    dispatch(
      setSelectedArtistId({
        id: data._id,
        name: data.name,
        metaScore: data.ratingStats.metaScore,
      })
    );
  };

  return (
    <div className="w-2/4 relative flex flex-col justify-center pl-8 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 "
      >
        <SocialsMedia data={data} />
        <span className="capitalize text-lightgray">{label}</span>
        <div className="relative h-24">
          <div className="absolute -left-[110px]">
            <AnimatedWords
              className="text-[80px] leading-tight mr-3 font-secondary"
              text={`${stageName ? stageName : name}`}
            />
          </div>
        </div>
        <div className="flex capitalize text-lightgray space-x-1 items-center">
          <Image
            className="w-6 mr-3"
            src={flag}
            width={100}
            height={100}
            alt="country-flag"
          />
          <span>{country}</span>,<span>{city}</span>
        </div>
        <p className=" text-sm pr-20">{desc}</p>
        <div className="w-52">
          <CardRatings item={data} onRate={onRate} />
        </div>
        <Link href={`/artists/${data._id}/reviews`}>Go to Reviews</Link>
      </motion.div>
    </div>
  );
};

export default Info;
