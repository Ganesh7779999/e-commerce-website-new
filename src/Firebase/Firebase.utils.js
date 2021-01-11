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
  measurementId: "G-2WWYVR4JX6",
};

firebase.initializeApp(config);

export const auth = firebase.auth(); //using auth
export const firestore = firebase.firestore(); //using firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //for the path
  const snapShot = await userRef.get(); //for the data like set(), get(), delete()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        //if the snapShot doesn.t exists it will create the data using set()
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider(); //for google authentication
provider.setCustomParameters({ prompt: "select_account" }); //it will access to selecting google accounts
export const SignInWithGoogle = () => auth.signInWithPopup(provider); //it is MAIN METHOD which will give a popup with showing google accounts

//firestore is a noSQL database which is it will store everything in one big object
//Terms used COLLECTIONS AND DOCUMENTS

//Other terms QueryReference and QuerySnapshot,these two are different type of objects
//QueryReference is the path i.e., where we are exactly in the database
//QuerySnapshot will return the data of that path

//In QueryReference we have DocumentReference and CollectionReference

export default firebase;
