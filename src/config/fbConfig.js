import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAI2Q6QqXch96tPpbgYatBM7vagNMzhtlo",
  authDomain: "mynoa-marioplan.firebaseapp.com",
  projectId: "mynoa-marioplan",
  storageBucket: "mynoa-marioplan.appspot.com",
  messagingSenderId: "335831176726",
  appId: "1:335831176726:web:512ccf2984c9633b990737",
  measurementId: "G-TPFR94RNKJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
