import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyC50SUx9Ov1Yq_aOWxInLcdMOX7KxqbGSA",
    authDomain: "arifchat-a8232.firebaseapp.com",
    databaseURL: "https://arifchat-a8232-default-rtdb.firebaseio.com",
    projectId: "arifchat-a8232",
    storageBucket: "arifchat-a8232.appspot.com",
    messagingSenderId: "665111180215",
    appId: "1:665111180215:web:a54d30af37dab3bcf62e32"
};

firebase.initializeApp(config);

export default firebase;
