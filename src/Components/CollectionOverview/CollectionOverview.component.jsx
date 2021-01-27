import React from "react";

import { connect } from "react-redux";
import { selectShopCollections } from "../../Pages/ShopPage/ShopDataSelector";
// import { selectShopCollectionsForPreview } from "../../Pages/ShopPage/ShopDataSelector";
import { createStructuredSelector } from "reselect";

import CollectionPreviewComponent from "../CollectionPreview/CollectionPreview.component";

function CollectionOverviewComponent(props) {
  // console.log(props);
  return (
    <div className="collections-overview">
      {props.collections.map((collection) => {
        return (
          <CollectionPreviewComponent
            key={collection.id}
            title={collection.title}
            items={collection.items}
            path={props.match.path}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverviewComponent);
