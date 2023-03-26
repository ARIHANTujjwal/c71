import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAQgXEwQIi97Oae8PJGTiUmI-0hmbcHbeg",
    authDomain: "erider71-4c59e.firebaseapp.com",
    projectId: "erider71-4c59e",
    storageBucket: "erider71-4c59e.appspot.com",
    messagingSenderId: "305742652210",
    appId: "1:305742652210:web:c8826f69d220e700fc2d2b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
