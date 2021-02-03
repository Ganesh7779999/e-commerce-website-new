import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../Pages/ShopPage/ShopDataSelector";
import WithSpinner from "../../Components/WithSpinner/WithSpinner.component";
import CollectionOverviewComponent from "./CollectionOverview.component";

import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverviewComponent)
// );

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverviewComponent);

export default CollectionOverviewContainer;
