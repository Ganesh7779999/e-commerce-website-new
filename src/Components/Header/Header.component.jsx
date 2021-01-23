import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../Assets/crown.svg";

import { auth } from "../../Firebase/Firebase.utils.js";

import { connect } from "react-redux"; //connect is a Higher order component,that will modify our headerComponnet to have access to redux

import CartIconComponent from "../CartIcon/CartIcon.component";
import CartDropDownComponent from "../CartDropDown/CartDropDown.component";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { selectCartHidden } from "../../Redux/Cart/CartSelector.js";

const HeaderComponent = (
  { currentUser, hidden } //This currentUser came from the connect() below.
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
      <CartIconComponent />
    </div>
    {hidden ? null : <CartDropDownComponent />}
  </div>
);

// const mapStateToProps = (state) => ({
//here state input is the RootReducer
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderComponent); //now this will give currentUser

//connect() is a HOC and it will give access to things related to redux
//connect() and mapStateToProps are the IMPORTANT FUNCTIONS which will give access to the reducers
