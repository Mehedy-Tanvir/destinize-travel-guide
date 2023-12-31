import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUtils from "../../Utils/useUtils";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ tourPackage }) => {
  const { getMyProfile, getTourGuides } = useUtils();
  const { user } = useAuth();
  const [date, setDate] = useState(null);
  const [selectedTourGuide, setSelectedTourGuide] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Queries
  const { data: tourGuides, isLoading } = useQuery({
    queryKey: ["tourGuides"],
    queryFn: getTourGuides,
  });

  // Queries
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile", user?.email],
    queryFn: getMyProfile,
  });

  const handleSubmit = () => {
    const touristId = myProfile?._id;
    const tourGuideId = selectedTourGuide;
    const tourPackageId = tourPackage._id;
    const tourDate = date;

    const bookingInfo = {
      tourist: touristId,
      tourGuide: tourGuideId,
      tourPackage: tourPackageId,
      tourDate,
      status: "In Review",
    };
    axiosSecure
      .post("/bookings", bookingInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Your booking was successful");
        if (res.data?.discount?.discount) {
          navigate("/congratulations");
        } else {
          navigate("/dashboard/myBookings");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your booking was not placed");
      });
    document.getElementById("my_modal_5").close();
  };
  const handleBookNowClick = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="container p-4 mx-auto mt-8">
      <h2 className="mb-4 text-2xl font-bold">Booking Form</h2>
      <div className="flex items-center justify-center mb-10">
        <div className="flex border-2 p-[20px] rounded-3xl flex-col items-center justify-center gap-4 shadow-lg">
          <img
            className="w-[150px] rounded-[100%] object-cover object-center border-2 border-black h-[150px]"
            src={myProfile?.image}
            alt=""
          />
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Name: {myProfile?.name}</h1>
            <h1 className="text-[#666]">Email: {myProfile?.email}</h1>
          </div>
        </div>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name of the Package
          </label>
          <input
            type="text"
            readOnly
            name="packageName"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={tourPackage?.tripTitle}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Name
          </label>
          <input
            type="text"
            readOnly
            name="touristName"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            value={myProfile?.name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Email
          </label>
          <input
            type="email"
            name="touristEmail"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            readOnly
            value={myProfile?.email}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Image
          </label>
          <input
            type="text"
            name="touristImage"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            readOnly
            value={myProfile?.image}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price $
          </label>
          <input
            type="number"
            name="price"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            readOnly
            value={tourPackage?.price}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tour Date
          </label>
          <div className="relative">
            <DatePicker
              selected={date}
              onChange={(e) => setDate(e)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
            <input
              type="hidden"
              name="tourDate"
              placeholder="Select a date"
              value={date ? date.toISOString() : ""}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tour Guide Name
          </label>
          <select
            name="tourGuideId"
            onChange={(e) => setSelectedTourGuide(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          >
            {!isLoading &&
              tourGuides?.map((guide, index) => (
                <option key={index} value={guide?._id}>
                  {guide?.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="text-lg font-bold">
                Want to confirm your booking?
              </h3>
              <p className="py-4">
                Press Confirm To Book, Press Cancel To Cancel
              </p>
              <div className="modal-action">
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-400"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </form>
    </div>
  );
};
BookingForm.propTypes = {
  tourPackage: PropTypes.object,
};
export default BookingForm;
