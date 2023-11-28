import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCard from "./PackageCard";

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
    <div>
      {!isLoading && tourPackages.length > 0 && (
        <div>
          {tourPackages?.map((tourPackage, idx) => (
            <PackageCard key={idx} tourPackage={tourPackage}></PackageCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourPackages;
