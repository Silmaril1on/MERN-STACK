import Link from "next/link";
import CardImage from "./cardHero/CardImage";
import CardArticle from "./cardHero/CardArticle";
import AddToSection from "./addToSection/AddToSection";
import { useDispatch } from "react-redux";
import WhiteSvg from "@/app/components/materials/WhiteSvg";
import { motion } from "framer-motion";
import { forChildren, forParent } from "@/app/animations/motionValues";
import {
  cardStyle,
  handleRate,
  innerStyles,
  wrapperStyle,
} from "@/app/utils/cardUtils";

const CardBody = ({ artists, itemsPerPage, currentIndex }) => {
  const dispatch = useDispatch();
  const innerContainerProps = innerStyles(artists, currentIndex);

  return (
    <div style={wrapperStyle(itemsPerPage)}>
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView="viisible"
        variants={forParent}
        viewport={{ once: true }}
        {...innerContainerProps}
      >
        {artists?.map((item) => (
          <motion.div
            key={item._id}
            style={cardStyle}
            variants={forChildren}
            className="text-lightgray group bg-neutral-900 relative p-1 flex-center"
          >
            <Link href={`/artists/${item._id}`}>
              <WhiteSvg />
              <CardImage item={item} />
              <CardArticle item={item} onRate={handleRate(dispatch, item)} />
              <AddToSection item={item} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardBody;
