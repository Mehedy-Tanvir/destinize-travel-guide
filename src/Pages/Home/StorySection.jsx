import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const StorySection = () => {
  const axiosPublic = useAxiosPublic();
  // Queries
  const { data: stories, isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const result = await axiosPublic("/stories");
      return result.data;
    },
  });

  return (
    <div>
      {!isLoading && stories && (
        <div className="container mx-auto my-8">
          <h1 className="text-4xl mb-[100px] font-semibold text-center font-volkhov">
            Tourist <span className="text-[#4475F2]">Stories</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stories?.slice(0, 4).map((story, idx) => (
              <StoryCard key={idx} story={story} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <Link to="/allStories">
              <button className="btn border-2 border-[#4475F2] text-[18px] font-medium bg-transparent text-[#4475F2] hover:text-white hover:bg-[#4475F2] shadow-lg">
                All Stories
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySection;
