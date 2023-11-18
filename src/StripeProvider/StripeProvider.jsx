// StripeProvider.js
import process from "process";
import { StripeProvider as ReactStripeProvider } from "react-stripe-elements";

const StripeProvider = ({ children }) => {
  return (
    <ReactStripeProvider apiKey={process.env.PUBLIC}>
      {children}
    </ReactStripeProvider>
  );
};

export default StripeProvider;
