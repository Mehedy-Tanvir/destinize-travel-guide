import { useQuery } from "@tanstack/react-query";
import useUtils from "../../Utils/useUtils";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useAuth();
  const { getMyProfile } = useUtils();
  const axiosSecure = useAxiosSecure();
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const handleAddStory = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = myProfile.name;
    const location = form.location.value;
    const content = form.content.value;
    const image = form.image.value;
    const story = { title, author, location, content, image, date };
    axiosSecure
      .post("/stories", story)
      .then((res) => {
        console.log(res.data);
        toast.success("Story added");
        form.storyImage.value = "";
        form.storyDetails.value = "";
        navigate("/allStories");
      })
      .catch((error) => console.log(error));
    console.log(story);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.guideImage.value;
    const name = form.guideName.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const education = form.education.value;
    const skills = form.skills.value;
    const workExperience = form.workExperience.value;
    const user = {
      name,
      image,
      contactDetails: { phone, address },
      education,
      skills,
      workExperience,
    };

    axiosSecure
      .put(`/users/${myProfile?._id}`, user)
      .then((res) => {
        console.log(res.data);
        toast.success("Profile updated successfully");
        refetch();
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
    isLoading,
  } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });

  return (
    <div className="h-screen">
      <Helmet>
        <title>Destinize | Profile</title>
      </Helmet>
      {!isLoading && myProfile && (
        <div className="px-2 mt-10">
          <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
            My <span className="text-[#4475F2]">Profile</span>
          </h1>
          {!isLoading && myProfile?.role !== "Tour Guide" && (
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
          )}
          {!isLoading && myProfile?.role === "Tour Guide" && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex border-2 p-[20px] rounded-3xl flex-col items-center justify-center gap-4 shadow-lg">
                <img
                  className="w-[150px] rounded-[100%] object-cover object-center border-2 border-black h-[150px]"
                  src={myProfile?.image}
                  alt=""
                />
                <div className="text-left">
                  <h1 className="mb-5 text-xl font-semibold text-center md:text-2xl">
                    Name: {myProfile?.name}
                  </h1>
                  <div className="text-[#222] text-[14px] md:text-xl mb-2 flex items-center gap-2">
                    <MdEmail className="text-[#4475F2]" />{" "}
                    <p className="">{myProfile?.email}</p>
                  </div>
                  <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                    <FaPhone className="text-[#4475F2]" />{" "}
                    <p>{myProfile?.contactDetails?.phone}</p>
                  </div>
                  <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                    <FaLocationDot className="text-[#4475F2]" />{" "}
                    <p>{myProfile?.contactDetails?.address}</p>
                  </div>
                  <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                    <FaGraduationCap className="text-[#4475F2]" />{" "}
                    <p>{myProfile?.education}</p>
                  </div>
                  <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                    <GiSkills className="text-[#4475F2]" />{" "}
                    <p>{myProfile?.skills}</p>
                  </div>
                  <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                    <MdOutlineWorkHistory className="text-[#4475F2]" />{" "}
                    <p>{myProfile?.workExperience}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!isLoading && myProfile?.role === "Tourist" && (
            <div>
              <h1 className="text-3xl mt-[100px] font-semibold text-center font-volkhov">
                Add Your <span className="text-[#4475F2]">Story</span>
              </h1>
              <form onSubmit={handleAddStory} className="w-full card-body">
                <div className="flex flex-col gap-2">
                  <div className="form-control">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="Title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      name="image"
                      type="text"
                      placeholder="Image URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Tour Date
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={date}
                        onChange={(e) => setDate(e)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                      />
                      <input
                        type="hidden"
                        name="date"
                        placeholder="Select a date"
                        value={date ? date.toISOString() : ""}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      name="location"
                      type="text"
                      placeholder="Location"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="block text-sm font-medium text-gray-700">
                      Content
                    </label>
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Story Content"
                      required
                      name="content"
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
                    <input
                      name="phone"
                      type="text"
                      defaultValue={myProfile?.contactDetails?.phone || ""}
                      className="mb-2 input input-bordered"
                      required
                      placeholder="Enter Phone Number"
                    />
                    <textarea
                      className="w-full max-w-xs textarea textarea-bordered textarea-lg"
                      placeholder="Enter Address"
                      required
                      name="address"
                      defaultValue={myProfile?.contactDetails?.address || ""}
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
