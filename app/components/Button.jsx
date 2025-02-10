const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative text-lightgray hover:text-white green-btn font-tetriary uppercase text-lg"
    >
      {children}
    </button>
  );
};

export default Button;
