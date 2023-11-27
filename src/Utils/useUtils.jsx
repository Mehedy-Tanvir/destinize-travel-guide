import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useUtils = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const getMyProfile = async () => {
    const result = await axiosSecure(`/users?email=${user?.email}`);
    return result.data;
  };
  const getAllUsers = async () => {
    const result = await axiosSecure("/allUsers");
    return result.data;
  };
  const getTourGuides = async () => {
    const result = await axiosPublic("/tourGuides");
    return result.data;
  };
  const getTourGuide = async (id) => {
    const result = await axiosPublic(`/tourGuides/${id}`);
    return result.data;
  };

  const myFunctions = {
    getMyProfile,
    getAllUsers,
    getTourGuides,
    getTourGuide,
  };
  return myFunctions;
};

export default useUtils;
