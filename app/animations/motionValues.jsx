export const modalAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.6,
    },
  },
};

export const zoomIn = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const animatedLetters = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      type: "spring",
      dumping: 10,
      stiffness: 40,
    },
  },
};

export const iconsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 1.3,
    },
  },
};
