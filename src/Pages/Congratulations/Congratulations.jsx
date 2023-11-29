import Confetti from "react-confetti";
import { Link } from "react-router-dom";
const Congratulations = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10">
        <Confetti></Confetti>
        <h1 className="text-5xl font-medium text-red-500">
          Congratulations!!!
        </h1>
        <h1 className="text-2xl">
          You have won <span className="text-red-500">30%</span> discount!!!
        </h1>
        <p className="text-xl text-gray">
          Go to your booking page to{" "}
          <Link to={"/dashboard/myBookings"} className="text-red-500">
            Apply
          </Link>
        </p>
        <p className="text-lg font-medium">
          NB: This Discount Will Be Applicable To Your Accepted Bookings Only
          Once.
        </p>
      </div>
    </div>
  );
};

export default Congratulations;
