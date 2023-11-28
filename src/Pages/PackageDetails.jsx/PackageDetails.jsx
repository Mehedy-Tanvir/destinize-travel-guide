import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TourGuides from "../Home/TourGuides";
import BookingForm from "./BookingForm";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";
import useAuth from "../../Hooks/useAuth";

const PackageDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { user, loading } = useAuth();

  // Queries
  const { data: tourPackage, isLoading } = useQuery({
    queryKey: ["tourPackage", id],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosPublic(`/tours/${id}`);
      return result.data;
    },
  });
  return (
    <div className="container p-4 mx-auto mt-8">
      <div>
        {isLoading && <Spinner></Spinner>}
        {!isLoading && !tourPackage && (
          <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl">Package Not Found.</h1>
          </div>
        )}
        {!isLoading && tourPackage && (
          <div>
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tourPackage?.galleryImages?.map((galleryImage, idx) => (
                  <img
                    key={idx}
                    src={galleryImage}
                    alt={`Tour Destination ${idx + 1}`}
                    className="object-cover w-full h-48"
                  />
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">About The Tour</h2>
              <p className="text-gray-700">{tourPackage?.about}</p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold">Tour Plan</h2>
              <ul className="pl-4 list-disc">
                {tourPackage?.tourPlan?.map((day, idx) => (
                  <li key={idx}>
                    <strong>Day {idx + 1}:</strong>{" "}
                    <div className="collapse collapse-arrow bg-base-200">
                      <input type="radio" name="my-accordion-2" />
                      <div className="text-xl font-medium collapse-title">
                        {day?.title}
                      </div>
                      <div className="collapse-content">
                        <p>{day?.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
      <TourGuides></TourGuides>
      {!loading && user && (
        <BookingForm tourPackage={tourPackage}></BookingForm>
      )}
    </div>
  );
};

export default PackageDetails;