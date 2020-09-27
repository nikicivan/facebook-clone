import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD-UNhviy6rFgfflDWcGfJsLfnbcAHiOk",
  authDomain: "facebook-clone-3df97.firebaseapp.com",
  databaseURL: "https://facebook-clone-3df97.firebaseio.com",
  projectId: "facebook-clone-3df97",
  storageBucket: "facebook-clone-3df97.appspot.com",
  messagingSenderId: "1067664436196",
  appId: "1:1067664436196:web:b7255f5847085986f675f1",
  measurementId: "G-0W4RN0SECE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const providerFacebook = new firebase.auth.FacebookAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
