import React from "react";
import "./CollectionItem.styles.scss";
import CustomButtonComponent from "../CustomButton/CustomButton.component";

import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/CartAction";

const CollectionItemComponent = (props) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
    </div>
    <CustomButtonComponent
      onClick={() => props.addItem(props.item)}
      inverted
      buttonname="ADD TO CART"
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemComponent);
