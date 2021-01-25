import React from "react";
import "./CartDropDown.styles.scss";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

import { connect } from "react-redux";
import CartItemComponent from "../CartItem/CartItem.component";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/CartSelector.js";

import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../Redux/Cart/CartAction";

function CartDropDownComponent(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        <CustomButtonComponent
          onClick={() => {
            props.history.push("/CheckOut");
            props.dispatch(toggleCartHidden());
          }}
          buttonname="GO TO CHECKOUT"
        />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDownComponent));
