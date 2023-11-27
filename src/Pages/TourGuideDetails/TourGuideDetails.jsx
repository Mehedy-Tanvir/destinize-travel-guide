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

const TourGuideDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  // Queries
  const {
    data: tourGuide,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tourGuide", id],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosPublic(`/tourGuides/${id}`);
      return result.data;
    },
  });
  console.log(error);
  return (
    <div>
      {!isLoading && tourGuide && (
        <div className="flex flex-col items-center justify-center">
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
