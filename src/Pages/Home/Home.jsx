import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TourGuideCard from "./TourGuideCard";
import useUtils from "../../Utils/useUtils";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { getTourGuides } = useUtils();
  // Queries
  const {
    data: tourGuides,
    refetch,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getTourGuides,
  });
  return (
    <>
      <Helmet>
        <title>Destinize | Home</title>
      </Helmet>
      <Banner></Banner>
      {!isLoading && tourGuides && (
        <div>
          <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
            Our <span className="text-[#4475F2]">Tour Guides</span>
          </h1>
          <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {tourGuides.map((guide, idx) => (
              <TourGuideCard key={idx} guide={guide}></TourGuideCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
