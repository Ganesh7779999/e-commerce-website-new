import { createStore, applyMiddleware } from "redux"; //these both are functions
import logger from "redux-logger"; //this is used for debugging our actions

import rootReducer from "./RootReducer";

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
