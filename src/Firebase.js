/** @format */

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWb3cvFRoSEe3xZLEWdWmBQZ8iJrh-71Q",
  authDomain: "clone-69545.firebaseapp.com",
  databaseURL: "https://clone-69545.firebaseio.com",
  projectId: "clone-69545",
  storageBucket: "clone-69545.appspot.com",
  messagingSenderId: "472671825756",
  appId: "1:472671825756:web:b6134a6d04d5c946dfdb99",
  measurementId: "G-Z55EP4NQQF",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
