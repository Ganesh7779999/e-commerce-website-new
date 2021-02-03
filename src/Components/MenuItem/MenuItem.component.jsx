import React from "react";
import "./MenuItem.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItemComponent = (props) => (
  // console.log(props.match.path);
  // console.log(props.title, props.linkUrl);
  <div
    className={`${props.size} menu-item`}
    onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItemComponent); //withRouter() will send the HomePageComponent props to menuItemComponent in its props
