import { useQuery } from "@tanstack/react-query";
import useUtils from "../../Utils/useUtils";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user } = useAuth();
  const { getMyProfile } = useUtils();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const storyImage = form.storyImage.value;
    const storyDetails = form.storyDetails.value;
    const story = { storyDetails, storyImage };
    axiosSecure
      .post("/stories", story)
      .then((res) => {
        console.log(res.data);
        toast.success("Story added");
        form.storyImage.value = "";
        form.storyDetails.value = "";
      })
      .catch((error) => console.log(error));
  };

  // Queries
  const {
    data: myProfile,
    refetch,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });

  return (
    !isLoading &&
    myProfile && (
      <div className="px-2 mt-10">
        <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
          My <span className="text-[#4475F2]">Profile</span>
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex border-2 p-[20px] rounded-3xl flex-col items-center justify-center gap-4 shadow-lg">
            <img
              className="w-[150px] rounded-[100%] object-cover object-center border-2 border-black h-[150px]"
              src={myProfile?.image}
              alt=""
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                Name: {myProfile?.name}
              </h1>
              <h1 className="text-[#666]">Email: {myProfile?.email}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl mt-[100px] font-semibold text-center font-volkhov">
          Add Your <span className="text-[#4475F2]">Story</span>
        </h1>
        <form onSubmit={handleSubmit} className="w-full card-body">
          <div className="flex flex-col gap-2">
            <div className="form-control">
              <input
                name="storyImage"
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                placeholder="Your Story"
                required
                name="storyDetails"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 form-control">
            <button className="bg-[#4475F2] hover:opacity-90 text-white text-xl md:text-2xl h-[60px] px-[20px] rounded-lg">
              Add Story
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default MyProfile;
