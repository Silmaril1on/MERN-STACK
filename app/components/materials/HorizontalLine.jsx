const HorizontalLine = ({ className }) => {
  return (
    <svg height="2" width="100%" className={className}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(224, 238, 241, 0.10)" />
          <stop offset="50%" stopColor="rgba(224, 241, 225, 0.644)" />
          <stop offset="100%" stopColor="rgba(224, 238, 241, 0.10)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="100%" height="1.5" fill="url(#gradient)" />
    </svg>
  );
};

export default HorizontalLine;
