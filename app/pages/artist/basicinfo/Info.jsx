"use client";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CardRatings from "../../home/artistsSection/cardHero/CardRatings";
import AnimatedWords from "@/app/components/AnimatedWords";
import SocialsMedia from "./SocialsMedia";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import InfoLinks from "./InfoLinks";

const Info = ({ data }) => {
  const dispatch = useDispatch();
  const { label, name, stageName, desc, ratingStats, _id } = data;
  const displayName = stageName || name;

  const onRate = () => {
    dispatch(
      setSelectedArtistId({
        id: _id,
        name: name,
        ratingStats: ratingStats,
        stageName: stageName,
      })
    );
  };

  console.log(displayName);

  return (
    <div className="w-2/4 relative flex flex-col justify-center pl-8 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <SocialsMedia data={data} />
        <span className="capitalize text-lightgray">{label}</span>
        <div className="relative h-24">
          <div className="absolute -left-[110px]">
            <AnimatedWords
              className="text-[80px] leading-tight mr-3 font-secondary"
              text={`${displayName}`}
            />
          </div>
        </div>
        <NationalityDetails className="text-lightgray" item={data} />
        <p className=" text-sm pr-20">{desc}</p>
        <div className="w-52">
          <CardRatings item={data} onRate={onRate} />
        </div>
      </motion.div>
      <InfoLinks data={data} />
    </div>
  );
};

export default Info;
