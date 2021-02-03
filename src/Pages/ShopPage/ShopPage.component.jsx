import React from "react";
import "./ShopPage.styles.scss";

import CollectionOverviewComponent from "../../Components/CollectionOverview/CollectionOverview.component";
import { Route } from "react-router-dom";

import CollectionPageComponent from "../CollectionPage/CollectionPage.component";

import { connect } from "react-redux";
// import { updateCollections } from "../../Redux/Shop/ShopPageActions.js";
// import ShopReducer from "../../Redux/Shop/ShopReducer.js";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../Firebase/Firebase.utils.js";

import WithSpinner from "../../Components/WithSpinner/WithSpinner.component";

import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../Redux/Shop/ShopPageActions.js";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "./ShopDataSelector";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverviewComponent);
const CollectionPageWithSpinner = WithSpinner(CollectionPageComponent);

class ShopPageComponent extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // const collectionsMap = collectionRef.onSnapshot(async (snapshot) =>
    //   convertCollectionsSnapshotToMap(snapshot)
    // );
    // updateCollections(collectionsMap); //action called
    // this.setState({ loading: false });
  }

  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;
    console.log("isfetching is" + isFetchingCollections);
    console.log("isCollections is" + isCollectionsLoaded);

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // component={CollectionOverviewComponent}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isFetchingCollections}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageComponent);
