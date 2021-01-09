import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../Assets/crown.svg";

const HeaderComponent = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <WebsiteLogo className="logo" />
    </Link>
    <div className="options">
      <Link to="/ShopPage" className="option">
        SHOP
      </Link>
      <Link to="/ShopPage" className="option">
        SHOP
      </Link>
      <Link to="/ShopPage" className="option">
        SHOP
      </Link>
    </div>
  </div>
);
export default HeaderComponent;
