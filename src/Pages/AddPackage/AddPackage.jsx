import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();
  const [tourData, setTourData] = useState({
    tripTitle: "",
    galleryImages: [],
    about: "",
    tourType: "",
    price: "",
    tourPlan: [],
  });

  const [dayPlan, setDayPlan] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddImage = () => {
    const imageUrl = document.getElementById("imageInput").value;
    if (imageUrl) {
      setTourData((prevData) => ({
        ...prevData,
        galleryImages: [...prevData.galleryImages, imageUrl],
      }));

      document.getElementById("imageInput").value = "";
    }
  };

  const handleAddDay = () => {
    setTourData((prevData) => ({
      ...prevData,
      tourPlan: [
        ...prevData.tourPlan,
        { title: dayPlan.title, description: dayPlan.description },
      ],
    }));

    setDayPlan({
      title: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Tour Data Submitted:", tourData);
    axiosSecure
      .post("/tours", tourData)
      .then((res) => {
        toast.success("Package added successfully");
        console.log(res.data);
      })
      .catch((error) => {
        toast.error("Package was not added");
        console.log(error);
      });
  };

  return (
    <div className="px-2 h-screen pb-[100px] max-w-[1400px] w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Trip Title</h2>
          <input
            type="text"
            name="tripTitle"
            value={tourData.tripTitle}
            onChange={handleChange}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Trip Title"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-xl font-medium">Tour Type</h2>
          <input
            type="text"
            name="tourType"
            value={tourData.tourType}
            onChange={handleChange}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Tour Type"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-xl font-medium">Price</h2>
          <input
            type="number"
            name="price"
            value={tourData.price}
            onChange={handleChange}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Price"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-xl font-medium">Gallery</h2>
          {tourData.galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
          ))}
          <div className="flex flex-col gap-2 lg:flex-row">
            <input
              id="imageInput"
              type="text"
              placeholder="Add Image URL"
              className="w-full max-w-xs input input-bordered"
            />
            <button
              className="text-white bg-blue-500 btn"
              type="button"
              onClick={handleAddImage}
            >
              Add Image
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-medium">About The Tour</h2>
          <textarea
            name="about"
            value={tourData.about}
            onChange={handleChange}
            className="w-full max-w-xs textarea textarea-bordered textarea-lg"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-medium">Tour Plan</h2>
          {tourData.tourPlan.map((day, index) => (
            <div key={index}>
              <h3>{`Day ${index + 1}`}</h3>
              <p>Title: {day.title}</p>
              <p>Description: {day.description}</p>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Day Title"
              value={dayPlan.title}
              onChange={(e) =>
                setDayPlan((prevPlan) => ({
                  ...prevPlan,
                  title: e.target.value,
                }))
              }
              className="w-full max-w-xs input input-bordered"
            />
            <textarea
              value={dayPlan.description}
              onChange={(e) =>
                setDayPlan((prevPlan) => ({
                  ...prevPlan,
                  description: e.target.value,
                }))
              }
              placeholder="Day Description"
              className="w-full max-w-xs textarea textarea-bordered textarea-lg"
            ></textarea>
            <button
              className="text-white bg-blue-500 btn"
              type="button"
              onClick={handleAddDay}
            >
              Enter Plan
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="text-lg text-white bg-blue-500 btn" type="submit">
            Add Package
          </button>
        </div>
      </form>
      <div className="h-[100px] w-full"></div>
    </div>
  );
};

export default AddPackage;
