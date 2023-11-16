import React from "react";
import { ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // Prevent default form submission to avoid page refresh
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet; disable form submission
      return;
    }

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
      });

      if (result.error) {
        // Handle and show the error to the customer
        console.error(result.error.message);
      } else {
        // Customer will be redirected to return_url
      }
    } catch (error) {
      // Handle other errors during payment confirmation
      console.error("Error confirming payment:", error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!this.props.stripe}>
          Submit
        </button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
