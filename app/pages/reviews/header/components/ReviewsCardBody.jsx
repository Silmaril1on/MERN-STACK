"use client";
import { motion } from "framer-motion";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import StageName from "@/app/components/artistcomponents/StageName";
import Image from "next/image";

const ReviewsCardBody = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col my-8"
    >
      <div className="w-52 h-52 overflow-hidden">
        <Image
          className="w-full h-full object-cover brightness-90 hover:scale-105 hover:brightness-100 duration-300"
          src={data.image}
          alt={data.name}
          width={400}
          height={400}
          quality={100}
          priority
        />
      </div>
      <div className="flex flex-col pt-3">
        <StageName className="text-5xl" item={data} />
        <NationalityDetails item={data} />
      </div>
    </motion.section>
  );
};

export default ReviewsCardBody;
