import { useQuery } from "@tanstack/react-query";
import useUtils from "../../Utils/useUtils";
import Spinner from "../Shared/Spinner/Spinner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const { getAllUsers } = useUtils();
  const axiosSecure = useAxiosSecure();
  // Queries
  const {
    data: allUsers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });
  const handleRole = (role, id) => {
    axiosSecure
      .patch(`/roles/${id}`, { role })
      .then((res) => {
        console.log(res.data);
        toast.success("Role changed successfully");
        refetch();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Role changing was not successful");
      });
  };

  return (
    <div className="h-screen">
      {isLoading && <Spinner></Spinner>}
      {!isLoading && allUsers && (
        <div className="px-2 mt-[150px] lg:mt-0 max-w-[1400px] mx-auto overflow-x-auto">
          <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
            Manage <span className="text-[#4475F2]">Users</span>
          </h1>
          <div className="overflow-x-auto w-[350px] md:w-full px-2">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-lg">User</th>
                  <th className="text-lg">Email</th>
                  <th className="text-lg">Role</th>
                  <th className="text-lg">Action</th>
                </tr>
              </thead>

              <tbody>
                {allUsers?.map((user, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src={user?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                    <td>
                      <div className="flex flex-col gap-2 lg:flex-row">
                        <button
                          onClick={() => handleRole("Admin", user?._id)}
                          disabled={
                            user?.role === "Admin" ||
                            user?.role === "Tour Guide"
                          }
                          className={`p-3 mr-2 bg-white border-2 rounded-lg hover:bg-blue-500 hover:text-white ${
                            user?.role === "Admin" ||
                            user?.role === "Tour Guide"
                              ? "cursor-not-allowed opacity-50"
                              : "border-blue-500"
                          }`}
                        >
                          Make Admin
                        </button>
                        <button
                          onClick={() => handleRole("Tour Guide", user?._id)}
                          disabled={
                            user?.role === "Admin" ||
                            user?.role === "Tour Guide"
                          }
                          className={`p-3 mr-2 bg-white border-2 rounded-lg hover:bg-blue-500 hover:text-white ${
                            user?.role === "Admin" ||
                            user?.role === "Tour Guide"
                              ? "cursor-not-allowed opacity-50"
                              : "border-blue-500"
                          }`}
                        >
                          Make Guide
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="w-full h-10"></div>
    </div>
  );
};

export default ManageUsers;
