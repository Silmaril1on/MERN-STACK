const Paragraph = ({ className = "", size = 2, children }) => {
  const sizeClasses = {
    1: "text-[12px]",
    2: "text-sm",
    3: "text-md",
    4: "text-lg",
    5: "text-xl",
    6: "text-2xl",
    7: "text-3xl",
  };

  return (
    <p
      className={`text-lightgray pointer-events-none whitespace-pre-wrap font-secondary ${
        sizeClasses[size] || "text-md"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
