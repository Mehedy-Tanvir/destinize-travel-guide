import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCard from "../Home/PackageCard";
import { Helmet } from "react-helmet-async";

const AllPackages = () => {
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
    <div>
      <Helmet>
        <title>Destinize | Packages</title>
      </Helmet>
      <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
        Our <span className="text-[#4475F2]">Packages</span>
      </h1>
      {!isLoading && tourPackages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tourPackages?.map((tourPackage, idx) => (
            <PackageCard key={idx} tourPackage={tourPackage}></PackageCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
