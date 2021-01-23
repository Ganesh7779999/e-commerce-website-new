import React from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../Assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartAction.js";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../Redux/Cart/CartSelector.js";

const CartIconComponent = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
// itemCount: state.cart.cartItems.reduce(
//   (accumulator, cartItem) => accumulator + cartItem.quantity,
//   0
// ),

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);
