//root reducer is the base reducer object that represents all of the state of our application
//It combines all of the states together

import { combineReducers } from "redux"; //combineReducers is function, it will combine reducers
import userReducer from "./User/UserReducer";
import cartReducer from "./Cart/CartReducer";
import directoryReducer from "./Directory/DirectoryReducer";
import ShopReducer from "./Shop/ShopReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  //it is the big JSON OBJECT which will store all the reducers
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: ShopReducer,
});
// export default persistReducer(persistConfig, rootReducer);
export default persistReducer(persistConfig, rootReducer);
