import React from "react";
import "./CheckOutPage.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/CartSelector";
import { selectCartTotal } from "../../Redux/Cart/CartSelector";

import CheckOutItemComponent from "../../Components/CheckOutItem/CheckOutItem.component";

import StripeCheckoutButton from "../../Components/Stripe-Button/StripeButton.component";

const CheckOutPageComponent = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map((cartItem) => (
        <CheckOutItemComponent key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:${props.total}</span>
      </div>
      <StripeCheckoutButton price={props.total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPageComponent);
