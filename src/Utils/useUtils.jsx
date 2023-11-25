import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useUtils = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const getMyProfile = async () => {
    const result = await axiosSecure(`/users?email=${user?.email}`);
    return result.data;
  };

  const myFunctions = { getMyProfile };
  return myFunctions;
};

export default useUtils;
