import React from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../Assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartAction.js";

const CartIconComponent = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIconComponent);
