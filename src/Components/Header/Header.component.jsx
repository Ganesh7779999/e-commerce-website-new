import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../Assets/crown.svg";

import { auth } from "../../Firebase/Firebase.utils.js";

const HeaderComponent = (props) => (
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
      {props.currentUser ? ( //here currentUser is true if it is an object
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
export default HeaderComponent;
