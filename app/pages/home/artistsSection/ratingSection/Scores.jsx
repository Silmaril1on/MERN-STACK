import StageName from "@/app/components/artistcomponents/StageName";
import Spinner from "@/app/components/Spinner";

const Scores = ({ rating, item }) => {
  return (
    <div className="flex-center flex-col space-y-4">
      <span className="text-sm">RATE</span>
      <StageName className="text-4xl" item={item} />
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
