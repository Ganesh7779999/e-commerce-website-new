import React from "react";
import "./ShopPage.styles.scss";

import CollectionOverviewComponent from "../../Components/CollectionOverview/CollectionOverview.component";
import { Route } from "react-router-dom";

import CollectionPageComponent from "../CollectionPage/CollectionPage.component";

const ShopPageComponent = ({ match }) => {
  // console.log(match);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewComponent}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageComponent}
      />
    </div>
  );
};
export default ShopPageComponent;
