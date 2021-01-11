import React, { Component } from "react";
import "./SignIn.styles.scss";
import FormInputComponent from "../FormInput/FormInput.component";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

import { SignInWithGoogle } from "../../Firebase/Firebase.utils.js";

class SignInComponent extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputComponent
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            label="email"
          />

          <FormInputComponent
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            label="password"
          />
          <div className="buttons">
            <CustomButtonComponent
              type="submit"
              value="submit"
              buttonname="SIGN IN"
            ></CustomButtonComponent>
            <CustomButtonComponent
              onClick={SignInWithGoogle}
              buttonname="SIGN IN WITH GOOGLE"
              googleSignInButton
            ></CustomButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
