import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Shared/Spinner/Spinner";

const StoryDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  // Queries
  const { data: story, isLoading } = useQuery({
    queryKey: ["story"],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosPublic(`/stories/${id}`);
      return result.data;
    },
  });

  return (
    <div className="container mx-auto my-8">
      {!isLoading && story && (
        <div className="max-w-2xl p-8 mx-auto bg-white rounded-md shadow-md">
          <img
            src={story?.image}
            alt={story?.title}
            className="mb-4 rounded-md"
          />
          <h2 className="mb-2 text-2xl font-bold">{story?.title}</h2>
          <p className="mb-2 text-gray-600">{`By ${story?.author} on ${
            story?.date
              ? new Date(story?.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : ""
          }`}</p>
          <p className="mb-2 text-gray-700">{`Location: ${story?.location}`}</p>
          <p className="mb-4 text-gray-800">{story?.content}</p>
          <div>
            {/* Add your share button here */}
            {/* You can use the react-share package for this */}
            {/* Example: */}
            {/* <FacebookShareButton url={`URL_OF_YOUR_STORY_DETAIL_PAGE/${id}`}>Share on Facebook</FacebookShareButton> */}
          </div>
        </div>
      )}
      {isLoading && <Spinner></Spinner>}
      {!isLoading && !story && (
        <div className="flex items-center justify-center w-full h-min-screen">
          <h1 className="text-2xl font-medium">Story Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default StoryDetails;
