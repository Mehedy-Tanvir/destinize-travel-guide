import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const PackageCard = ({ tourPackage }) => {
  return (
    <div className="flex w-[300px] justify-self-center self-center h-[430px] border-2 p-[20px] rounded-3xl flex-col items-center gap-4 shadow-lg">
      <div className="relative">
        <img
          className="w-[250px] rounded-[10%] object-cover object-center border-2 border-black h-[200px]"
          src={tourPackage?.galleryImages[0]}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white hover:opacity-75 opacity-80 flex justify-center">
          <button>
            <FaHeart className="text-4xl text-blue-500 hover:opacity-90" />
          </button>
        </div>
      </div>
      <div className="flex-grow text-left">
        <h1 className="text-xl font-semibold">{tourPackage?.tripTitle}</h1>
        <h1 className="text-[#666]">
          <span className="font-medium text-black">Type:</span>{" "}
          {tourPackage?.tourType}
        </h1>
        <h1 className="text-[#666]">
          <span className="font-medium text-black">Price:</span> $
          {tourPackage?.price}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link to={`/packageDetails/${tourPackage?._id}`}>
          <button className="w-full text-white bg-blue-500 btn hover:bg-blue-400">
            View Package
          </button>
        </Link>
      </div>
    </div>
  );
};
PackageCard.propTypes = {
  tourPackage: PropTypes.object,
};
export default PackageCard;
