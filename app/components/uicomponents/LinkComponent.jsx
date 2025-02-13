import Link from "next/link";

const LinkComponent = ({ children, href, className, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex flex-row items-center hover-white text-lg space-x-2 font-bold font-tetriary w-fit ${className}`}
    >
      {children[0]}
      <span>{children[1]}</span>
    </Link>
  );
};

export default LinkComponent;
