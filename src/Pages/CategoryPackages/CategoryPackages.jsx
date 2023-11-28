import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCard from "../Home/PackageCard";
import { useParams } from "react-router-dom";

const CategoryPackages = () => {
  const axiosPublic = useAxiosPublic();
  const { category } = useParams();

  // Queries
  const { data: categoryPackages, isLoading } = useQuery({
    queryKey: ["categoryPackages"],
    queryFn: async () => {
      const result = await axiosPublic(`/categoryTours?category=${category}`);
      return result.data;
    },
  });
  return (
    <div className="mt-10">
      {!isLoading && categoryPackages.length > 0 && (
        <div>
          <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
            Category <span className="text-[#4475F2]">{category}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {categoryPackages?.map((tourPackage, idx) => (
              <PackageCard key={idx} tourPackage={tourPackage}></PackageCard>
            ))}
          </div>
        </div>
      )}
      {!isLoading && categoryPackages.length === 0 && (
        <div className="flex items-center justify-center">
          <h1 className="text-4xl mb-[40px] font-semibold text-center font-volkhov">
            Packages Not Found
          </h1>
        </div>
      )}
    </div>
  );
};

export default CategoryPackages;
