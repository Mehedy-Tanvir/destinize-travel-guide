import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="p-16 bg-gray-100 rounded-lg">
      <Helmet>
        <title>Destinize | About</title>
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl mb-[100px] font-semibold text-center font-volkhov">
          About <span className="text-[#4475F2]">Destinize</span>
        </h1>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-gray-700">
              Welcome to Destinize, your ultimate online guide to exploring the
              captivating destinations of Bangladesh. We are dedicated to
              providing comprehensive information and valuable resources to
              travelers seeking guidance on popular spots in this beautiful
              country.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Our mission is to inspire and assist you in creating unforgettable
              travel experiences. Whether you are a seasoned adventurer or a
              first-time traveler, Destinize is here to simplify your journey,
              offering detailed insights into the most attractive tourist spots
              and beyond.
            </p>
            <p className="text-lg text-gray-700">
              What sets us apart is our commitment to showcasing the diversity
              of Bangladesh, providing local insights, and making travel
              planning an enjoyable and enriching process.
            </p>
          </div>

          <div className="order-first lg:order-2">
            <img src="/about.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
