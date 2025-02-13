"use client";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CardRatings from "../../home/artistsSection/cardHero/CardRatings";
import AnimatedWords from "@/app/components/AnimatedWords";
import SocialsMedia from "./SocialsMedia";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import InfoLinks from "./InfoLinks";
import Paragraph from "@/app/components/uicomponents/Paragraph";

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

  return (
    <div className="w-2/4 relative flex flex-col justify-center pl-8 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 pr-20"
      >
        <SocialsMedia data={data} />
        <Paragraph className="capitalize">{label}</Paragraph>
        <div className="relative h-24">
          <div className="absolute -left-[110px]">
            <AnimatedWords
              className="text-[80px] leading-tight mr-3 font-tetriary font-bold"
              text={`${displayName}`}
            />
          </div>
        </div>
        <NationalityDetails className="text-lightgray" item={data} />
        <Paragraph className="font-light">{desc}</Paragraph>
        <CardRatings item={data} onRate={onRate} />
      </motion.div>
      <InfoLinks data={data} />
    </div>
  );
};

export default Info;
