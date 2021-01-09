import React from "react";
import "./App.css";
import HomePageComponent from "./Pages/HomePage/HomePage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPageComponent from "./Pages/ShopPage/ShopPage.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/ShopPage" component={ShopPageComponent} />
      </Switch>
    </div>
  );
}

export default App;
