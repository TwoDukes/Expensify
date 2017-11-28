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

  const database = firebase.database();

  database.ref().set({
    name: "Dustin Podell",
    age: 21,
    isSingle: false,
    location: {
      city: 'Los Angeles',
      country: 'USA'
    }
  });

  //database.ref().set('This is my data');

  database.ref('age').set(27);
  database.ref('location/city').set('Northridge');

  database.ref('attributes').set({
    height: 75,
    weight: 240
  });
  