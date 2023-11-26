import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useUtils = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const getMyProfile = async () => {
    const result = await axiosSecure(`/users?email=${user?.email}`);
    return result.data;
  };
  const getAllUsers = async () => {
    const result = await axiosSecure("allUsers");
    return result.data;
  };

  const myFunctions = { getMyProfile, getAllUsers };
  return myFunctions;
};

export default useUtils;
