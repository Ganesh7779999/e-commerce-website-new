import { createStore /*applyMiddleware*/ } from "redux"; //these both are functions
// import logger from "redux-logger"; //this is used for debugging our actions

import rootReducer from "./RootReducer";

// const middleWares = [logger];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
