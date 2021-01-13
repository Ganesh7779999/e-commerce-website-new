import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../Assets/crown.svg";

import { auth } from "../../Firebase/Firebase.utils.js";

import { connect } from "react-redux"; //connect is a Higher order component,that will modify our headerComponnet to have access to redux

const HeaderComponent = (
  { currentUser } //This currentUser came from the connect() below.
) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <WebsiteLogo className="logo" />
    </Link>
    <div className="options">
      <Link to="/ShopPage" className="option">
        SHOP
      </Link>
      <Link to="/ShopPage" className="option">
        CONTACT
      </Link>
      {currentUser ? ( //here currentUser is true if it is an object
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/Signin&Register" className="option">
          SIGN IN/REGISTER
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  //here state input is the RootReducer
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HeaderComponent); //now this will give currentUser

//connect() and mapStateToProps are the IMPORTANT FUNCTIONS which will give access to the reducers
