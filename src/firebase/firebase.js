  import * as firebase from 'firebase';
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD2kY1yS25yOT_Kqj1xpTFb5tO6ztpjA8U",
    authDomain: "expensify-b2b3f.firebaseapp.com",
    databaseURL: "https://expensify-b2b3f.firebaseio.com",
    projectId: "expensify-b2b3f",
    storageBucket: "expensify-b2b3f.appspot.com",
    messagingSenderId: "995457296426"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: "Dustin Podell"
  });