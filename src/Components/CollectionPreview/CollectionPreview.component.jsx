import React from "react";
import "./CollectionPreview.styles.scss";
import CollectionItemComponent from "../CollectionItem/CollectionItem.component";

const CollectionPreviewComponent = (props) => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {props.items
        .filter((item, index) => index < 4)
        .map((item) => (
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
export default CollectionPreviewComponent;
