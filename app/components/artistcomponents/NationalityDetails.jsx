import Image from "next/image";

const NationalityDetails = ({ item, className }) => {
  const { flag, country, city } = item;
  return (
    <div
      className={`w-fit flex-center space-x-1 font-light capitalize ${className}`}
    >
      <Image
        src={flag}
        alt="country-flag"
        width={100}
        height={100}
        className="w-6 mr-2"
      />
      <div className="flex-center space-x-1 capitalize group-hover:text-white duration-300 font-secondary font-normal">
        <span>{country}</span>, <span>{city}</span>
      </div>
    </div>
  );
};

export default NationalityDetails;
