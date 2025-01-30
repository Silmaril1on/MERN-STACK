import Spinner from "@/app/components/Spinner";

const Scores = ({ rating, name }) => {
  return (
    <div className="flex-center flex-col space-y-4">
      <span className="text-sm">RATE</span>
      <h2 className="text-4xl font-bold">{name}</h2>
      <div className="flex-center w-16 h-8">
        <span className="text-end text-5xl pr-1 w-8 font-bold">
          {rating === 0 ? <Spinner /> : `${rating}`}
        </span>
        <span className="text-xl text-gray-400">/10</span>
      </div>
    </div>
  );
};

export default Scores;
