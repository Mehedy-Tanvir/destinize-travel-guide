import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUtils from "../../Utils/useUtils";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyWishlist = () => {
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
    data: myWishlist,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myWishlist", user?.email],
    enabled: Boolean(myProfile),
    queryFn: async () => {
      const result = await axiosSecure(`/wishlistItems/${myProfile._id}`);
      return result.data;
    },
  });
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/wishlistItems/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
        toast.success("Removed from the wishlist");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Could not removed from the wishlist");
      });
  };
  return (
    <div className="">
      <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
        My <span className="text-[#4475F2]">Wishlist</span>
      </h1>
      <div className="overflow-x-auto w-[350px] md:w-full px-2">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Package Name</th>
              <th>Price</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {!isLoading &&
              myWishlist &&
              myWishlist.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item?.tourPackage?.tripTitle}</td>
                  <td>{item?.tourPackage?.price}</td>
                  <td>
                    <Link to={`/packageDetails/${item?.tourPackage._id}`}>
                      <button className="p-3 mr-2 text-white bg-blue-500 border-2 rounded-lg hover:bg-green-400 hover:text-white">
                        View Details
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-3 mr-2 text-white bg-red-500 border-2 rounded-lg hover:bg-red-400 hover:text-white"
                    >
                      Delete
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

export default MyWishlist;
