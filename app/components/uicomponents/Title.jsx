const Title = ({ className = "", size = 15, children }) => {
  const sizeClasses = {
    2: "text-[12px]",
    5: "text-sm",
    10: "text-lg",
    15: "text-xl",
    20: "text-2xl",
    30: "text-3xl",
    40: "text-4xl",
    50: "text-5xl",
    60: "text-6xl",
    70: "text-7xl",
  };

  return (
    <h1
      className={`text-center w-fit inline-flex capitalize ${
        sizeClasses[size] || "text-lg"
      } ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
