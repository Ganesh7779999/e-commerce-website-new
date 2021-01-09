import React from "react";
import "./FormInput.styles.scss";

const FormInputComponent = (props) => (
  <div className="group">
    <input
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      className="form-input"
      required
    />
    {props.label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {props.label}
      </label>
    ) : null}
  </div>
);

export default FormInputComponent;
