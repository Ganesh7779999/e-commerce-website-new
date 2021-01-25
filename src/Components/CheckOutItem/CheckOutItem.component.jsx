import React from "react";
import "./CheckOutItem.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../Redux/Cart/CartAction";
import { addItem } from "../../Redux/Cart/CartAction";
import { removeItem } from "../../Redux/Cart/CartAction";

const CheckOutItemComponent = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.cartItem.imageUrl} alt="item"></img>
      </div>
      <span className="name">{props.cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => props.removeItem(props.cartItem)}>
          &#10094;
        </div>
        <span className="value">{props.cartItem.quantity}</span>
        <div className="arrow" onClick={() => props.addItem(props.cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.cartItem.price}</span>
      <span
        onClick={() => props.clearItem(props.cartItem)}
        className="remove-button"
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItemComponent);
