import { setSelectedArtistId } from "../features/modalSlice";

// 1) Settings for artists slider card in ArtistsSection.jsx
const cardWidth = 236;
const cardMargin = 8;

export const cardStyle = {
  width: `${cardWidth}px`,
  margin: `0 ${cardMargin}px`,
};

// 📦 Parent Container style
export const wrapperStyle = (itemsPerPage) => ({
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: `${(cardWidth + 2 * cardMargin) * itemsPerPage}px`,
});

// 🔄 Inner Container Style (Sliding Logic)
export const innerStyles = (artists, currentIndex) => ({
  style: {
    transform: `translateX(-${currentIndex * (cardWidth + 2 * cardMargin)}px)`,
    width: `${(cardWidth + 2 * cardMargin) * artists?.length}px`,
  },
  className:
    "flex flex-row transition-transform duration-1000 ease-in-out relative z-[5]",
});

// ⭐ Rating Handler Function for AddToSection.jsx
export const handleRate = (dispatch, item) => () => {
  dispatch(
    setSelectedArtistId({
      id: item._id,
      name: item.name,
      ratingStats: item.ratingStats,
      stageName: item.stageName,
    })
  );
};
