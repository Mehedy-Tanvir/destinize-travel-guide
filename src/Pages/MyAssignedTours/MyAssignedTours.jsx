import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUtils from "../../Utils/useUtils";
import toast from "react-hot-toast";

const MyAssignedTours = () => {
  const { user } = useAuth();
  const { getMyProfile } = useUtils();
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });
  // Queries
  const {
    data: myAssignedTours,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myAssignedTours", user?.email],
    enabled: Boolean(myProfile),
    queryFn: async () => {
      const result = await axiosSecure(`/assignedTours/${myProfile._id}`);
      return result.data;
    },
  });
  console.log("my work", myAssignedTours);
  const handleStatus = (id, status) => {
    axiosSecure
      .patch(`/updateTourStatus/${id}`, { status })
      .then((res) => {
        console.log(res.data);
        toast.success(`Booking was ${status}`);
        refetch();
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Booking was not ${status}`);
      });
  };
  return (
    <div className="">
      <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
        My <span className="text-[#4475F2]">Bookings</span>
      </h1>
      <div className="overflow-x-auto w-[350px] md:w-full px-2">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Package Name</th>
              <th>Tourist Name</th>
              <th>Tour Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {!isLoading &&
              myAssignedTours &&
              myAssignedTours.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item?.tourPackage?.tripTitle}</td>
                  <td>{item?.tourist?.name}</td>
                  <td>
                    {item?.tourDate
                      ? new Date(item.tourDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : ""}
                  </td>
                  <td>{item?.tourPackage?.price}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      onClick={() => handleStatus(item?._id, "Accepted")}
                      disabled={item?.status !== "In Review"}
                      className={`p-3 mr-2 bg-green-500 text-white rounded-lg hover:bg-green-400 ${
                        item?.status !== "In Review"
                          ? "cursor-not-allowed opacity-50"
                          : "border-green-500"
                      }`}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatus(item?._id, "Rejected")}
                      disabled={item?.status !== "In Review"}
                      className={`p-3 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-400 ${
                        item?.status !== "In Review"
                          ? "cursor-not-allowed opacity-50"
                          : "border-red-500"
                      }`}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignedTours;
