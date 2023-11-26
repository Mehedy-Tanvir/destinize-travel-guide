import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isRole, isPending: isRoleLoading } = useQuery({
    queryKey: [user?.email, "isRole"],
    enabled: !loading,
    queryFn: async () => {
      const result = await axiosSecure(`/users?email=${user?.email}`);
      return result?.data?.role;
    },
  });
  return [isRole, isRoleLoading];
};

export default useRole;
