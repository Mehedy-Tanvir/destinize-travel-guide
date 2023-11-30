import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import StoryCard from "../Home/StoryCard";
import Spinner from "../Shared/Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const AllStories = () => {
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
      <Helmet>
        <title>Destinize | Stories</title>
      </Helmet>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && stories && (
        <div className="container mx-auto my-8">
          <h1 className="text-4xl mb-[100px] font-semibold text-center font-volkhov">
            Tourist <span className="text-[#4475F2]">Stories</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {stories?.map((story, idx) => (
              <StoryCard key={idx} story={story} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStories;
