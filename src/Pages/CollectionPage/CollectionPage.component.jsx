import React from "react";
import "./CollectionPage.styles.scss";

import CollectionItemComponent from "../../Components/CollectionItem/CollectionItem.component";

import { selectShopCollection } from "../ShopPage/ShopDataSelector";
import { connect } from "react-redux";
const CollectionPageComponent = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemComponent
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPageComponent);
// export default CollectionPageComponent;
