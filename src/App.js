import React from "react";
import "./App.css";
import HomePageComponent from "./Pages/HomePage/HomePage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPageComponent from "./Pages/ShopPage/ShopPage.component.jsx";
import HeaderComponent from "./Components/Header/Header.component.jsx";
import SignInAndSignUpPageComponent from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/ShopPage" component={ShopPageComponent} />
        <Route
          exact
          path="/Signin&Register"
          component={SignInAndSignUpPageComponent}
        />
      </Switch>
    </div>
  );
}

export default App;
