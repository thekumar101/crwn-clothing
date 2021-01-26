import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBAQOMvqgCCK0-hALa7swHOVIrQCbmkuDY",
  authDomain: "crwn-db-f81f0.firebaseapp.com",
  projectId: "crwn-db-f81f0",
  storageBucket: "crwn-db-f81f0.appspot.com",
  messagingSenderId: "705256435220",
  appId: "1:705256435220:web:d929187f0c6ecf297c4101",
  measurementId: "G-H6XS62MD64"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
