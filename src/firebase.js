// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCylRL731dn_EW34UDFFghxgWmIkwLo1I4",
  authDomain: "slack-website-clone-d8ed5.firebaseapp.com",
  projectId: "slack-website-clone-d8ed5",
  storageBucket: "slack-website-clone-d8ed5.appspot.com",
  messagingSenderId: "687502900351",
  appId: "1:687502900351:web:eb7a9007e7784ec521134a",
  measurementId: "G-CQHV0V94WT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // for google authentication

export default db;
export { auth, provider };
