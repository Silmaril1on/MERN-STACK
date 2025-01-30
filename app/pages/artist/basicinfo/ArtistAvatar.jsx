"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/app/animations/motionValues";

const ArtistAvatar = ({ data }) => {
  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      animate="visible"
      className="w-2/4 h-[600px]"
    >
      <Image
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
        src={data.image}
        alt={data.name}
        priority
        quality={100}
      />
    </motion.div>
  );
};

export default ArtistAvatar;
