import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to send the email
      await axiosPublic.post("/sendEmail", formData);
      toast.success("Email sent successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="container mx-auto my-8">
      <Helmet>
        <title>Destinize | Contact</title>
      </Helmet>
      <h2 className="mb-4 text-3xl font-semibold">Contact Us</h2>
      <p className="mb-8 text-gray-600">
        We would love to hear from you! Reach out to us with any questions or
        inquiries.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mt-1 border rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 border rounded-md"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 mt-1 border rounded-md"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
