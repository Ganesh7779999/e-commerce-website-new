import React from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignInComponent from "../../Components/SignIn/SignIn.component";
import SignUpComponent from "../../Components/SignUp/SignUp.component";

const SignInAndSignUpPageComponent = () => (
  <div className="sign-in-and-sign-up">
    <SignInComponent />
    <SignUpComponent />
  </div>
);
export default SignInAndSignUpPageComponent;
