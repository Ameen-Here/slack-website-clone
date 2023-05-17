// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, fireStore, auth } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCylRL731dn_EW34UDFFghxgWmIkwLo1I4",
  authDomain: "slack-website-clone-d8ed5.firebaseapp.com",
  projectId: "slack-website-clone-d8ed5",
  storageBucket: "slack-website-clone-d8ed5.appspot.com",
  messagingSenderId: "687502900351",
  appId: "1:687502900351:web:eb7a9007e7784ec521134a",
  measurementId: "G-CQHV0V94WT",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firestore();
const auth1 = auth();
const provider = new auth.GoogleAuthProvider(); // for google authentication

export default db;
export { auth1, provider };
