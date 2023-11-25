import { useQuery } from "@tanstack/react-query";
import useUtils from "../../Utils/useUtils";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  const { getMyProfile } = useUtils();
  const handleSubmit = (e) => {
    e.preventDefault();
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

  console.log(myProfile);

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
          <div className="">
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Your Story"
                required
                name="story"
                cols="5"
                rows="4"
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
