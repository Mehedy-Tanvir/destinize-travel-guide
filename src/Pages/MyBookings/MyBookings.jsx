import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useUtils from "../../Utils/useUtils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { user, loading } = useAuth();
  const { getMyProfile } = useUtils();
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });
  // Queries
  const {
    data: myBookings,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myBookings", user?.email],
    enabled: Boolean(myProfile),
    queryFn: async () => {
      const result = await axiosSecure(`/bookings/${myProfile._id}`);
      return result.data;
    },
  });
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/bookings/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Booking was canceled");
        refetch();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Booking was not canceled");
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
              <th>Tour Guide Name</th>
              <th>Tour Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Pay</th>
              <th>Cancel</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {!isLoading &&
              myBookings &&
              myBookings.map((myBooking, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{myBooking?.tourPackage?.tripTitle}</td>
                  <td>{myBooking?.tourGuide?.name}</td>
                  <td>
                    {myBooking?.tourDate
                      ? new Date(myBooking.tourDate).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : ""}
                  </td>
                  <td>{myBooking?.tourPackage?.price}</td>
                  <td>{myBooking?.status}</td>
                  <td>
                    <button className="p-3 mr-2 text-white bg-green-500 border-2 rounded-lg hover:bg-green-400 hover:text-white">
                      Pay
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(myBooking?._id)}
                      className="p-3 mr-2 text-white bg-red-500 border-2 rounded-lg hover:bg-red-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button className="p-3 mr-2 text-white bg-orange-500 border-2 rounded-lg hover:bg-orange-400 hover:text-white">
                      Discount
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

export default MyBookings;
