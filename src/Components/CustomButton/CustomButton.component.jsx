import React from "react";
import "./CustomButton.styles.scss";

const CustomButtonComponent = (props) => (
  <button className="custom-button" type={props.type} value={props.value}>
    {props.buttonname}
  </button>
);

export default CustomButtonComponent;
