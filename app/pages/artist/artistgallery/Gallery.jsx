"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftButton from "@/app/components/uicomponents/LeftButton";
import RightButton from "@/app/components/uicomponents/RightButton";
import Image from "next/image";
import { slideShow } from "@/app/animations/motionValues";
import GalleryHeadline from "./GalleryHeadline";

const Gallery = ({ data }) => {
  const gallery = data?.gallery;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="h-screen flex-center flex-col max-h-[700px] bg-neutral-800 relative">
      <GalleryHeadline active={active} data={data} />
      <div className="w-[70%] h-[550px] relative px-7 group">
        <div className="overflow-hidden w-full h-full relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideShow}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full flex-center absolute"
            >
              <Image
                className="w-auto h-full"
                src={gallery[active]}
                alt="gallery"
                width={1200}
                height={1200}
                priority
                quality={100}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 flex items-center justify-between z-[2] opacity-0 group-hover:opacity-100 duration-300">
          <LeftButton onClick={handlePrev} />
          <RightButton onClick={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
