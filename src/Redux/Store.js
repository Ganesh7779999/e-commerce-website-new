import { createStore, applyMiddleware } from "redux"; //these both are functions
import logger from "redux-logger"; //this is used for debugging our actions

import rootReducer from "./RootReducer";

import { persistStore } from "redux-persist"; // persistStore is a function

import thunk from "redux-thunk";

const middlewares = [thunk];

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
