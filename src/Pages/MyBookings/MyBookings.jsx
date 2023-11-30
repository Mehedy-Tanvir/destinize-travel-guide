import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useUtils from "../../Utils/useUtils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
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
  console.log(myBookings);
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
  const handleDiscount = (id, price) => {
    const updatedPrice = price - price * 0.3;
    axiosSecure
      .patch(`/bookingDiscount/${id}`, {
        price: updatedPrice,
        tourist: myProfile._id,
      })
      .then((res) => {
        console.log(res.data);
        refetch();
        toast.success("Discount was applied");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Discount was not applied");
      });
  };
  return (
    <div className="h-screen">
      <Helmet>
        <title>Destinize | Bookings</title>
      </Helmet>
      <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
        My <span className="text-[#4475F2]">Bookings</span>
      </h1>
      <div className="overflow-x-auto w-[350px] md:w-[700px] xl:w-full px-2">
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
                  <td>
                    $
                    {myBooking?.discountedPrice
                      ? myBooking?.discountedPrice
                      : myBooking?.tourPackage?.price}
                  </td>
                  <td>{myBooking?.status}</td>
                  <td>
                    <Link to={`/dashboard/payment/${myBooking?._id}`}>
                      <button
                        disabled={myBooking?.status !== "Accepted"}
                        className={`p-3 mr-2 bg-green-500 text-white rounded-lg hover:bg-green-400 ${
                          myBooking?.status !== "Accepted"
                            ? "cursor-not-allowed opacity-50"
                            : "border-green-500"
                        }`}
                      >
                        Pay
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(myBooking?._id)}
                      disabled={myBooking?.status !== "In Review"}
                      className={`p-3 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-400 ${
                        myBooking?.status !== "In Review"
                          ? "cursor-not-allowed opacity-50"
                          : "border-red-500"
                      }`}
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleDiscount(
                          myBooking?._id,
                          myBooking?.tourPackage?.price
                        )
                      }
                      disabled={
                        !myProfile?.discount || myBooking?.status !== "Accepted"
                      }
                      className={`p-3 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 ${
                        !myProfile?.discount || myBooking?.status !== "Accepted"
                          ? "cursor-not-allowed opacity-50"
                          : "border-blue-500"
                      }`}
                    >
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
