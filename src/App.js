import React from "react";
import "./App.css";
import HomePageComponent from "./Pages/HomePage/HomePage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPageComponent from "./Pages/ShopPage/ShopPage.component.jsx";
import HeaderComponent from "./Components/Header/Header.component.jsx";
import SignInAndSignUpPageComponent from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx";

import { auth } from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null; //method which null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      //onAuthStateChanged refers to when there is any new user or not.it will check in the users list
      this.setState({ currentUser: user });
      console.log(this.state);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
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
}

export default App;
