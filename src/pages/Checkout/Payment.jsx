// components/StripeBuyButton.js

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// eslint-disable-next-line no-unused-vars
const StripeBuyButton = ({ buyButtonId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    // Create a PaymentMethod using the card element and other information
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Send the paymentMethod.id to your server for further processing
      console.log(paymentMethod.id);
    }
  };

  return (
    <div>
      <CardElement />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default StripeBuyButton;
