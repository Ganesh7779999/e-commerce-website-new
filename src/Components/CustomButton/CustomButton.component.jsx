import React from "react";
import "./CustomButton.styles.scss";

const CustomButtonComponent = (props) => (
  <button
    className={`${props.inverted ? "inverted" : ""} ${
      props.googleSignInButton ? "google-sign-in" : ""
    } custom-button`}
    type={props.type}
    value={props.value}
    onClick={props.onClick}
  >
    {props.buttonname}
  </button>
);

export default CustomButtonComponent;
