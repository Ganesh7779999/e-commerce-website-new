import React, { Component } from "react";
import "./SignUp.styles.scss";
import FormInputComponent from "../FormInput/FormInput.component";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

import { auth } from "../../Firebase/Firebase.utils.js";
import { createUserProfileDocument } from "../../Firebase/Firebase.utils";

class SignUpComponent extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Signup with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInputComponent
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleInputChange}
            label="Display Name"
            required
          />
          <FormInputComponent
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            label="Email"
            required
          />
          <FormInputComponent
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            label="Password"
            required
          />
          <FormInputComponent
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleInputChange}
            label="Confirm Password"
            required
          />
          <CustomButtonComponent type="submit" buttonname="SIGN UP" />
        </form>
      </div>
    );
  }
}

export default SignUpComponent;
