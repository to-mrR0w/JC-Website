// eslint-disable-next-line no-undef
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51ODE6HLXiSop3zWmPlvZKJUv9A73rr7cRfyZnpdxKPx8tp8ChUhFyobD2dqi1LUzR2XojeviHIe92nY3g320VMJ100bvNR8aOq",
);

// eslint-disable-next-line no-undef, no-unused-vars
exports.handler = async function (event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { amount, customerDetails } = JSON.parse(event.body);

    if (!amount || !customerDetails) {
      return {
        statusCode: 400,
        body: "Bad Request: Missing amount or customerDetails",
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      payment_method_types: ["card"],
      metadata: {
        customerName: customerDetails.name || "",
        customerAddress: customerDetails.address || "",
        customerCity: customerDetails.city || "",
        customerEmail: customerDetails.email || "",
        customerPhone: customerDetails.phone || "",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.error("Error:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
