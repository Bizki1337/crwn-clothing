import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKx-uaS8rlEFizO8m4uvzIm8-iyaFn-hM",
    authDomain: "crwn-db-13f3b.firebaseapp.com",
    projectId: "crwn-db-13f3b",
    storageBucket: "crwn-db-13f3b.appspot.com",
    messagingSenderId: "638852209466",
    appId: "1:638852209466:web:af1867983ef2a7b3d60e03",
    measurementId: "G-2TYQST20RC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;