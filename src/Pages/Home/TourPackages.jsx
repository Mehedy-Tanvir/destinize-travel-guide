import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const TourPackages = () => {
  const axiosPublic = useAxiosPublic();

  // Queries
  const { data: tourPackages, isLoading } = useQuery({
    queryKey: ["tourPackages"],
    queryFn: async () => {
      const result = await axiosPublic("/tours");
      return result.data;
    },
  });

  return (
    <div className="mt-[80px]">
      <h1 className="text-4xl mb-[100px] font-semibold text-center font-volkhov">
        Our <span className="text-[#4475F2]">Packages</span>
      </h1>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && tourPackages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tourPackages?.slice(0, 3).map((tourPackage, idx) => (
            <PackageCard key={idx} tourPackage={tourPackage}></PackageCard>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center mt-10">
        <Link to="/allPackages">
          <button className="btn border-2 border-[#4475F2] text-[18px] font-medium bg-transparent text-[#4475F2] hover:text-white hover:bg-[#4475F2] shadow-lg">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TourPackages;
