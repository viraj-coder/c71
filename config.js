import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCgE2-qTrn8FMnY2a853zLYx7rdHH7g_64",
    authDomain: "c-71-f822a.firebaseapp.com",
    databaseURL: "https://c-71-f822a.firebaseio.com",
    projectId: "c-71-f822a",
    storageBucket: "c-71-f822a.appspot.com",
    messagingSenderId: "804064760481",
    appId: "1:804064760481:web:ba722a8b186a5f987fd6e0",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();