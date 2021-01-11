import firebase from "firebase/app"; //this firebase will give access to firestore and auth
import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication

const config = {
    apiKey: "AIzaSyCt1MeL95FsWljxv-aPmwa1b4oDC66iv8g",
    authDomain: "e-commerce-new-db.firebaseapp.com",
    projectId: "e-commerce-new-db",
    storageBucket: "e-commerce-new-db.appspot.com",
    messagingSenderId: "1059271828007",
    appId: "1:1059271828007:web:325fb9090c2b6e4d402402",
    measurementId: "G-2WWYVR4JX6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth(); //using auth
export const firestore = firebase.firestore(); //using firestore

const provider = new firebase.auth.GoogleAuthProvider(); //for google authentication
provider.setCustomParameters({ prompt: "select_account" }); //it will access to selecting google accounts
export const SignInWithGoogle = () => auth.signInWithPopup(provider); //it is MAIN METHOD which will give a popup with showing google accounts

export default firebase;
