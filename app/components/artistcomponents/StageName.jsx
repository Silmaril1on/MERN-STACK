import Title from "../uicomponents/Title";

const StageName = ({ item, className, size }) => {
  const { stageName, name } = item;

  const displayName = stageName || name;

  return (
    <Title size={size} className={className}>
      {displayName}
    </Title>
  );
};

export default StageName;
