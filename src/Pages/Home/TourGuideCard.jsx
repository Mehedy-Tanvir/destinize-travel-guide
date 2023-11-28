import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TourGuideCard = ({ guide }) => {
  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: "1",
        delay: "0.5",
      }}
      className="flex w-[300px] justify-self-center self-center h-[430px] border-2 p-[20px] rounded-3xl flex-col items-center gap-4 shadow-lg"
    >
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
    </motion.div>
  );
};
TourGuideCard.propTypes = {
  guide: PropTypes.object,
};
export default TourGuideCard;
