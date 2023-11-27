const Overview = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-6 text-4xl font-semibold">
        Travel <span className="text-blue-500">Overview</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <iframe
            className="object-cover w-full h-40 rounded-lg md:h-56"
            src="https://www.youtube.com/embed/LNSZjsjeTog?si=uW7k3igLAK4DeJRu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="mt-4 text-xl font-semibold">Destination Showcase</h2>
          <p className="text-gray-600">Explore the beauty of Destination.</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <iframe
            className="object-cover w-full h-40 rounded-lg md:h-56"
            src="https://www.youtube.com/embed/WR3IXzNUNSg?si=UgEwvEi6Z6kFfNlX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="mt-4 text-xl font-semibold">Adventure Highlights</h2>
          <p className="text-gray-600">
            Experience thrilling adventures around the world.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <iframe
            className="object-cover w-full h-40 rounded-lg md:h-56"
            src="https://www.youtube.com/embed/8LSt8_11wbQ?si=m0q8AEZJz24lsVBe"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="mt-4 text-xl font-semibold">Customer Testimonials</h2>
          <p className="text-gray-600">
            Listen to our customers travel experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
