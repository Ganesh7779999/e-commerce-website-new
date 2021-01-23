import React from "react";
import "./CartDropDown.styles.scss";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

import { connect } from "react-redux";
import CartItemComponent from "../CartItem/CartItem.component";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/Cart/CartSelector.js";

function CartDropDownComponent(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} item={cartItem} />
        ))}
        <CustomButtonComponent buttonname="GO TO CHECKOUT" />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDownComponent);
