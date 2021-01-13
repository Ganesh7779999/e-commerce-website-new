import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux"; //Provider is a component

import store from "./Redux/Store";

ReactDOM.render(
  <Provider store={store}>
    {/* it will give access to store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
