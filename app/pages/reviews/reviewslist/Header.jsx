const Header = ({ data }) => {
  return (
    <div className="p-2 my-5">
      <h1 className="text-white font-secondary text-3xl">Artist Reviews</h1>
      <span>{data.length} Reviews</span>
    </div>
  );
};

export default Header;
