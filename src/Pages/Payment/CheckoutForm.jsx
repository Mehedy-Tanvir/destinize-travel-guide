import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, booking }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(price);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => console.log(error));
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payment info and change the status of the booking
        const paymentInfo = {
          booking: booking._id,
          transactionId: paymentIntent.id,
        };
        axiosSecure
          .post("/payment", paymentInfo)
          .then(() => {
            axiosSecure
              .patch(`/bookingConfirm/${booking._id}`, { status: "Paid" })
              .then((response) => {
                console.log(response.data);
                toast.success("Your payment was successful");
                Swal.fire({
                  title: "Your payment was successful!",
                  text: `Your Transaction Id: ${transactionId}`,
                  icon: "success",
                });
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
                toast.error("Your payment was not successful");
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Your payment was not successful");
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="my-4 mt-8 btn btn-sm btn-primary"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};
CheckoutForm.propTypes = {
  price: PropTypes.number,
  booking: PropTypes.object,
};
export default CheckoutForm;
