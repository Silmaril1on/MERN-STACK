import Link from "next/link";

const LinkComponent = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={`inline-flex flex-row items-center text-lightgray text-lg space-x-2 hover:text-white duration-300 my-3 font-bold font-tetriary ${className}`}
    >
      {children[0]}
      <span>{children[1]}</span>
    </Link>
  );
};

export default LinkComponent;
