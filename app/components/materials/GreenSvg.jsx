const GreenSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 z-0">
      <rect
        stroke="url(#gradient)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%">
          <stop offset="0%" stopColor="rgba(74, 255, 215, 0.110)" />
          <stop offset="50.1%" stopColor="rgba(74, 255, 215, 0.944)" />
          <stop offset="100%" stopColor="rgba(74, 255, 215, 0.110)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenSvg;
