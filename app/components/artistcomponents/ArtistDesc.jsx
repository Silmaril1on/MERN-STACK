const ArtistDesc = ({ item, className }) => {
  return (
    <div className="h-full mt-1">
      <p className={className}>
        {item.desc.length > 300
          ? `${item.desc.substring(0, 300)}...`
          : item.desc}
      </p>
    </div>
  );
};

export default ArtistDesc;
