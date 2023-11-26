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

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.guideImage.value;
    const name = form.guideName.value;
    const contactDetails = form.contactDetails.value;
    const education = form.education.value;
    const skills = form.skills.value;
    const workExperience = form.workExperience.value;
    const user = {
      name,
      image,
      contactDetails,
      education,
      skills,
      workExperience,
    };

    axiosSecure
      .put(`/users/${myProfile?._id}`, user)
      .then((res) => {
        console.log(res.data);
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Profile update was unsuccessful");
      });
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
    <div className="h-screen">
      {!isLoading && myProfile && (
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
          {!isLoading && myProfile?.role === "Tourist" && (
            <div>
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
          )}
          {!isLoading && myProfile?.role === "Tour Guide" && (
            <div>
              <h1 className="text-3xl mt-[100px] font-semibold text-center font-volkhov">
                Update Your <span className="text-[#4475F2]">Profile</span>
              </h1>
              <form onSubmit={handleUpdateProfile} className="w-full card-body">
                <div className="flex flex-col gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      name="guideImage"
                      type="text"
                      defaultValue={myProfile?.image}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="guideName"
                      type="text"
                      defaultValue={myProfile?.name}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Contact Details</span>
                    </label>
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Contact Details"
                      required
                      name="contactDetails"
                      defaultValue={myProfile?.contactDetails || ""}
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Education</span>
                    </label>
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Your Education"
                      required
                      name="education"
                      defaultValue={myProfile?.education || ""}
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Skills</span>
                    </label>
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Your Skills"
                      required
                      name="skills"
                      defaultValue={myProfile?.skills || ""}
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Work Experiences</span>
                    </label>
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Your Work Experiences"
                      required
                      name="workExperience"
                      defaultValue={myProfile?.workExperience || ""}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 form-control">
                  <button className="bg-[#4475F2] hover:opacity-90 text-white text-xl md:text-2xl h-[60px] px-[20px] rounded-lg">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyProfile;
