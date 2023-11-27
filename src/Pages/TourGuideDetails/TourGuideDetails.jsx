import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUtils from "../../Utils/useUtils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TourGuideDetails = () => {
  const { user, loading } = useAuth();
  const { getMyProfile } = useUtils();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: tourGuide, isLoading } = useQuery({
    queryKey: ["tourGuide", id],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosPublic(`/tourGuides/${id}`);
      return result.data;
    },
  });

  // Queries
  const {
    data: reviews,
    isLoading: reviewLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", id],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosPublic(`/reviews/${id}`);
      return result.data;
    },
  });
  console.log("reviews", reviews);
  const { data: myProfile } = useQuery({
    queryKey: ["myProfileForReview", user?.email],
    queryFn: getMyProfile,
  });

  const [rating, setRating] = useState(1); // Initial rating state
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(1);
    setComment("");
    const review = {
      tourGuideId: tourGuide._id,
      reviewerId: myProfile._id,
      rating,
      comment,
    };
    axiosSecure
      .post("/reviews", review)
      .then((res) => {
        toast.success("Your review was posted");
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        toast.error("Your review was not posted");
        console.log(error);
      });
  };

  return (
    <div>
      {!isLoading && tourGuide && (
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl mt-[40px] mb-[40px] font-semibold text-center font-volkhov">
            Tour <span className="text-[#4475F2]">Guide</span>
          </h1>
          <div className="flex border-2 p-[20px] rounded-3xl flex-col items-center justify-center gap-4 shadow-lg">
            <img
              className="w-[150px] rounded-[100%] object-cover object-center border-2 border-black h-[150px]"
              src={tourGuide?.image}
              alt=""
            />
            <div className="text-left">
              <h1 className="mb-5 text-xl font-semibold text-center md:text-2xl">
                Name: {tourGuide?.name}
              </h1>
              <div className="text-[#222] text-[14px] md:text-xl mb-2 flex items-center gap-2">
                <MdEmail className="text-[#4475F2]" />{" "}
                <p className="">{tourGuide?.email}</p>
              </div>
              <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                <FaPhone className="text-[#4475F2]" />{" "}
                <p>{tourGuide?.contactDetails?.phone}</p>
              </div>
              <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                <FaLocationDot className="text-[#4475F2]" />{" "}
                <p>{tourGuide?.contactDetails?.address}</p>
              </div>
              <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                <FaGraduationCap className="text-[#4475F2]" />{" "}
                <p>{tourGuide?.education}</p>
              </div>
              <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                <GiSkills className="text-[#4475F2]" />{" "}
                <p>{tourGuide?.skills}</p>
              </div>
              <div className="text-[#222] mb-2 text-[14px] md:text-xl flex flex-wrap items-center gap-2">
                <MdOutlineWorkHistory className="text-[#4475F2]" />{" "}
                <p>{tourGuide?.workExperience}</p>
              </div>
            </div>
          </div>
          <div>
            {!loading && user && (
              <div>
                <h1 className="text-4xl mt-[40px] mb-[40px] font-semibold text-center font-volkhov">
                  Give <span className="text-[#4475F2]">Review</span>
                </h1>
                <div className="flex flex-col items-center justify-center gap-2 mb-5">
                  <img
                    className="h-[50px] w-[50px] object-cover object-center rounded-[50%] mr-2"
                    src={myProfile?.image}
                    alt=""
                  />
                  <p className="text-2xl font-medium">{myProfile?.name}</p>
                </div>
                <div className="flex items-center justify-center">
                  <form className="mb-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 md:items-center md:justify-center md:flex-row">
                      <label className="text-2xl" htmlFor="rating">
                        Rating:
                      </label>
                      {/* Rating Stars */}
                      <div className="text-3xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            onClick={() => handleRatingChange(star)}
                            style={{
                              cursor: "pointer",
                              color: star <= rating ? "gold" : "gray",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-2xl" htmlFor="comment">
                        Comment:
                      </label>
                      <textarea
                        className="w-full max-w-xs textarea textarea-bordered textarea-sm"
                        placeholder="Your Review"
                        required
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <button
                        className="w-full mt-4 text-xl text-white bg-blue-500 btn hover:bg-blue-400"
                        type="submit"
                      >
                        Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!reviewLoading && reviews.length > 0 && (
        <div className="mb-[100px]">
          <h1 className="text-4xl mt-[40px] mb-[40px] font-semibold text-center font-volkhov">
            <span className="text-[#4475F2]">Reviews</span>
          </h1>
          <AwesomeSlider>
            {reviews.map((review, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <p className="py-8 text-white">{review?.comment}</p>
                <img
                  className="h-[50px] mb-2 w-[50px] object-cover object-center rounded-[50%]"
                  src={review?.reviewerId?.image}
                  alt=""
                />
                <h3 className="text-2xl text-orange-400">
                  {review?.reviewerId?.name}
                </h3>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      )}
      {isLoading && <Spinner></Spinner>}
      {!isLoading && !tourGuide && (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Tour Guide Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default TourGuideDetails;
