import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB5nBtnoKy3Jn3LNbIqSCz6nw3Y1nOtWO8",
  authDomain: "accessories-store-2ee10.firebaseapp.com",
  databaseURL: "https://accessories-store-2ee10.firebaseio.com",
  projectId: "accessories-store-2ee10",
  storageBucket: "accessories-store-2ee10.appspot.com",
  messagingSenderId: "711953148577",
  appId: "1:711953148577:web:822b577522dabe8a591ee0",
  measurementId: "G-9W8ELENM3D",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let { displayName, email } = userAuth;

  let snapshot = await userRef.get();
  if (!snapshot.exists) {
    let createdAt = new Date();
    let data = { displayName, email, createdAt, ...additionalData };

    try {
      await userRef.set(data);
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const siginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
