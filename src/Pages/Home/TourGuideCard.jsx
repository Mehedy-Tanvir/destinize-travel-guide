import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TourGuideCard = ({ guide }) => {
  return (
    <div className="flex w-[300px] h-[430px] border-2 p-[20px] rounded-3xl flex-col items-center gap-4 shadow-lg">
      <img
        className="w-[150px] rounded-[100%] object-cover object-center border-2 border-black h-[150px]"
        src={guide?.image}
        alt=""
      />
      <div className="flex-grow text-left">
        <h1 className="text-xl font-semibold">Name: {guide?.name}</h1>
        <h1 className="text-[#666]">
          <span className="font-medium text-black">skills:</span>{" "}
          {guide?.skills}
        </h1>
        <h1 className="text-[#666]">
          <span className="font-medium text-black">Work Experience:</span>{" "}
          {guide?.workExperience}
        </h1>
      </div>
      <Link to={`/tourGuide/${guide?._id}`}>
        <button className="text-white bg-blue-500 btn hover:bg-blue-400">
          View Details
        </button>
      </Link>
    </div>
  );
};
TourGuideCard.propTypes = {
  guide: PropTypes.object,
};
export default TourGuideCard;