const StageName = ({ item, className }) => {
  const { stageName, name } = item;

  const displayName = stageName || name;

  return <h1 className={`font-secondary ${className}`}>{displayName}</h1>;
};

export default StageName;
