import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const guides = ["Guide 1", "Guide 2", "Guide 3"]; // Replace with actual guide names

  return (
    <div className="container p-4 mx-auto mt-8">
      <h2 className="mb-4 text-2xl font-bold">Booking Form</h2>
      <form>
        {/* Name of the Package */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name of the Package
          </label>
          <input
            type="text"
            name="packageName"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter package name"
          />
        </div>

        {/* Tourist Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Name
          </label>
          <input
            type="text"
            name="touristName"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter tourist name"
          />
        </div>

        {/* Tourist Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Email
          </label>
          <input
            type="email"
            name="touristEmail"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter tourist email"
          />
        </div>

        {/* Tourist Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tourist Image
          </label>
          <input
            type="file"
            name="touristImage"
            accept="image/*"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter price"
          />
        </div>

        {/* Tour Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tour Date
          </label>
          <DatePicker
            selected={null} // Pass the selected date from state
            onChange={(date) => console.log(date)} // Handle date change
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        {/* Tour Guide Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tour Guide Name
          </label>
          <select
            name="tourGuide"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          >
            {guides.map((guide, index) => (
              <option key={index} value={guide}>
                {guide}
              </option>
            ))}
          </select>
        </div>

        {/* Book Now Button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
