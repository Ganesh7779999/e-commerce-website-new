import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IEACzBdNHayoCoJxHKX2PSFMtR8H15oEOhc3jPNhoav7M5ymNXLNmRu2hzONhqlsjutmuAxyh5kBSZmAksoRerY00tCBjwdTH";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckOut
      label="Pay now"
      name="e-commerce website"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
