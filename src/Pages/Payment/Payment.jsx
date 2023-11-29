import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: myBooking, isLoading } = useQuery({
    queryKey: ["myBooking"],
    enabled: Boolean(id),
    queryFn: async () => {
      const result = await axiosSecure(`/myBookings/${id}`);
      return result.data;
    },
  });
  console.log(myBooking);

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl">Payment</h1>
        <p className="text-2xl">Please Pay to Confirm Your Booking</p>
      </div>
      {!isLoading && myBooking && (
        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              booking={myBooking}
              price={
                myBooking?.discountedPrice
                  ? myBooking?.discountedPrice
                  : myBooking?.tourPackage?.price
              }
            ></CheckoutForm>
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Payment;
