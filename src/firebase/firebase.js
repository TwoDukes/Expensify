  import * as firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2kY1yS25yOT_Kqj1xpTFb5tO6ztpjA8U",
    authDomain: "expensify-b2b3f.firebaseapp.com",
    databaseURL: "https://expensify-b2b3f.firebaseio.com",
    projectId: "expensify-b2b3f",
    storageBucket: "expensify-b2b3f.appspot.com",
    messagingSenderId: "995457296426"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  // firebase.database().ref().set({
  //   name: "Dustin Podell",
  //   age: 21,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Los Angeles',
  //     country: 'USA'
  //   }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed', e);
  // });

  // firebase.database().ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  // database.ref('isSingle').remove().then(() => {
  //   console.log('Removed succesfully')
  // }).catch((e) => {
  //   console.log('Error', e)
  // });