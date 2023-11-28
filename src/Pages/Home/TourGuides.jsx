import { useQuery } from "@tanstack/react-query";
import useUtils from "../../Utils/useUtils";
import TourGuideCard from "./TourGuideCard";

const TourGuides = () => {
  const { getTourGuides } = useUtils();
  // Queries
  const { data: tourGuides, isLoading } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: getTourGuides,
  });
  return (
    <div className="mt-[80px]">
      {!isLoading && tourGuides && (
        <div className="mb-10">
          <h1 className="text-4xl mb-[100px] font-semibold text-center font-volkhov">
            Our <span className="text-[#4475F2]">Tour Guides</span>
          </h1>
          <div className="grid items-center justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tourGuides.map((guide, idx) => (
              <TourGuideCard key={idx} guide={guide}></TourGuideCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourGuides;
