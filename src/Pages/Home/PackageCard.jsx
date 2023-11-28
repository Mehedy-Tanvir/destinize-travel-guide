import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useUtils from "../../Utils/useUtils";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const PackageCard = ({ tourPackage }) => {
  const { user, loading } = useAuth();
  const { getMyProfile } = useUtils();
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });
  const handleWish = () => {
    const WishlistItem = {
      tourist: myProfile?._id,
      tourPackage: tourPackage?._id,
    };
    axiosSecure
      .post("/wishlistItems", WishlistItem)
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully added to your wishlist");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to add to your wishlist");
      });
  };
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
      <div className="relative">
        <img
          className="w-[250px] rounded-[10%] object-cover object-center border-2 border-black h-[200px]"
          src={tourPackage?.galleryImages[0]}
          alt=""
        />
        {!loading && user && (
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white hover:opacity-75 opacity-80 flex justify-center">
            <button onClick={handleWish}>
              <FaHeart className="text-4xl text-blue-500 hover:opacity-90" />
            </button>
          </div>
        )}
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
    </motion.div>
  );
};
PackageCard.propTypes = {
  tourPackage: PropTypes.object,
};
export default PackageCard;
