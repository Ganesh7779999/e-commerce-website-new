import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const selectShop = (state) =>
  // console.log(state);
  state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) =>
    //console.log(shop.collections);
    shop.collections
);

// export const selectShopCollectionsForPreview = createSelector(
//   [selectShopCollections],
//   (collections) => Object.keys(collections).map((key) => collections[key])
// );

export const selectShopCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) =>
      collections.find(
        (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
    // return collections[collectionUrlParam];
  );

//THIS CODE SAME AS ABOVE CODE BUT ENCLOSED WITH {} BRACKETS IS NOT WORKING
// export const selectShopCollection = (collectionUrlParam) =>
// createSelector([selectShopCollections], (collections) => {
//   collections.find(
//     (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//   );
//    return collections[collectionUrlParam];
// });
