import React from "react";
import "./App.css";
import HomePageComponent from "./Pages/HomePage/HomePage.component.jsx";
import { Route, Switch } from "react-router-dom";

const Shoppage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>SHOP PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
