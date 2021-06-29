import { boot } from "quasar/wrappers";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

/*
const firebaseConfig = {
  apiKey: "AIzaSyCPIE1yL5fECV9BDJfxXiqMGNs7Pl4z1bc",
  authDomain: "quasar-course-project.firebaseapp.com",
  databaseURL: "https://quasar-course-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quasar-course-project",
  storageBucket: "quasar-course-project.appspot.com",
  messagingSenderId: "397603994441",
  appId: "1:397603994441:web:ed50fe1767912a7081f898",
  measurementId: "G-LFT4CRTB1W"
};
*/

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
