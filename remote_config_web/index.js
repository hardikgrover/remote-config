import firebase from "firebase/app";
// const firebase = require("firebase/app");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZZHf8Jzl_8W-FEdGRAXbnz8lpsipi0yI",
  authDomain: "node-firebase-46440.firebaseapp.com",
  projectId: "node-firebase-46440",
  storageBucket: "node-firebase-46440.appspot.com",
  messagingSenderId: "277816066776",
  appId: "1:277816066776:web:eda5b6dbb807320bd2cdad",
  measurementId: "G-E9TKXNG9MG",
};
firebase.initializeApp(firebaseConfig);
const remoteConfig = firebase.remoteConfig();

remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

remoteConfig.defaultConfig = {
  welcome_message: "Welcome to your config.",
};

const val = remoteConfig.getValue("welcome_messsage");
console.log(val);

// remoteConfig
//   .fetchAndActivate()
//   .then(() => {
//     // ...
//   })
//   .catch((err) => {
//     // ...
//   });

console.log("hey there");
