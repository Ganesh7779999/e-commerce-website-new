//root reducer is the base reducer object that represents all of the state of our application
//It combines all of the states together

import { combineReducers } from "redux"; //combineReducers is function, it will combine reducers
import userReducer from "./User/UserReducer";

export default combineReducers({
  //it is the big JSON OBJECT which will store all the reducers
  user: userReducer,
});
