const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative text-lightgray hover:text-white w-fit font-primary uppercase text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
