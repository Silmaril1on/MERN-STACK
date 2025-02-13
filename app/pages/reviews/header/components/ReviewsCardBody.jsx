import { motion } from "framer-motion";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import StageName from "@/app/components/artistcomponents/StageName";
import Image from "next/image";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const ReviewsCardBody = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex flex-col my-8"
    >
      <div className="w-52 h-52 p-1 relative">
        <WhiteSvg />
        <div className="overflow-hidden w-full h-full">
          <Image
            className="w-full h-full object-cover hover:scale-105 hover-image"
            src={data.image}
            alt={data.name}
            width={400}
            height={400}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="inline-block pt-3">
        <StageName size={60} item={data} />
        <NationalityDetails item={data} />
      </div>
    </motion.section>
  );
};

export default ReviewsCardBody;
