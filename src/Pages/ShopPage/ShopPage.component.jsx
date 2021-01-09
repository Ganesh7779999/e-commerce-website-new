import React, { Component } from "react";
import "./ShopPage.styles.scss";
import ShopPageData from "./ShopPage.data";
import CollectionPreviewComponent from "../../Components/CollectionPreview/CollectionPreview.component";

class ShopPageComponent extends Component {
  constructor() {
    super();

    this.state = {
      collections: ShopPageData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          return (
            <CollectionPreviewComponent
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPageComponent;
