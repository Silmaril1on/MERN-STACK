const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative text-white green-btn font-tetriary text-lg"
    >
      {children}
    </button>
  );
};

export default Button;
