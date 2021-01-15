import React from "react";
import "./CartDropDown.styles.scss";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

export default function CartDropDownComponent() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButtonComponent buttonname="GO TO CHECKOUT" />
      </div>
    </div>
  );
}
