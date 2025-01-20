import WhiteSvg from "./materials/WhiteSvg";
import BlackSvg from "./materials/BlackSvg";

const Button = ({ children, type = "black", onClick }) => {
  const isBlack = type === "black";

  return (
    <button
      onClick={onClick}
      className="relative text-white green-btn font-secondary text-lg"
    >
      {/* {isBlack ? <WhiteSvg /> : <BlackSvg />} */}
      {children}
    </button>
  );
};

export default Button;
