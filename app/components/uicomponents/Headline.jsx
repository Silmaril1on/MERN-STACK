const Headline = ({ children, className }) => {
  return (
    <h1 className={`text-xl md:text-3xl lg:text-4xl ${className}`}>
      {children}
    </h1>
  );
};

export default Headline;
