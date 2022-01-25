import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDjx2LkZX5LRZqK6APy_0jv0J22AhJbNaQ",
    authDomain: "campus-connect-project-65c0d.firebaseapp.com",
    projectId: "campus-connect-project-65c0d",
    storageBucket: "campus-connect-project-65c0d.appspot.com",
    messagingSenderId: "913113046913",
    appId: "1:913113046913:web:b1443728f48cec57d39280",
    measurementId: "G-YF7YW0ZGPE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;