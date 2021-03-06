import React from "react";
import "./App.css";
import HomePageComponent from "./Pages/HomePage/HomePage.component.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPageComponent from "./Pages/ShopPage/ShopPage.component.jsx";
import CheckOutPageComponent from "./Pages/CheckOut/CheckOutPage.component.jsx";
import HeaderComponent from "./Components/Header/Header.component.jsx";
import SignInAndSignUpPageComponent from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage.component.jsx";

import { auth } from "./Firebase/Firebase.utils";
import { createUserProfileDocument } from "./Firebase/Firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/UserAction"; //ACTION

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/User/UserSelector";

import { selectShopCollectionsForPreview } from "./Pages/ShopPage/ShopDataSelector";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  unSubscribeFromAuth = null; //method which null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //onAuthStateChanged refers to when there is any new user or not.it will check in the users list
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        setCurrentUser(userAuth);
        // addCollectionAndDocuments(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route path="/ShopPage" component={ShopPageComponent} />
          <Route exact path="/CheckOut" component={CheckOutPageComponent} />
          <Route
            exact
            path="/Signin&Register"
            render={() =>
              this.props.currentUser ? (
                <Redirect />
              ) : (
                <SignInAndSignUpPageComponent />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //here user is the object and dispatch() will pass the user action object to every reducers and dispatch() will return the object from setCurrentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
