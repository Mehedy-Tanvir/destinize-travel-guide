const Offer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-3xl font-semibold">Exclusive Offer!</h1>
        <p className="mb-6 text-gray-600">
          Book the first 3 packages and get a{" "}
          <span className="text-2xl font-medium text-blue-500">30%</span>{" "}
          discount on accepted packages!
        </p>
      </div>
    </div>
  );
};

export default Offer;
