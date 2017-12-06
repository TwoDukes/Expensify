  import * as firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  //FB LOOGIN SETUP
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1943760019217994',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  const FacebookAuthrovider = new firebase.auth.FacebookAuthProvider();

  export { firebase, GoogleAuthProvider ,FacebookAuthrovider , database as default }


  //****SOME REFERENCE *******/

  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // // database.ref('expenses')
  // //   .on('value', (snapshot) => {
  // //     const expenses = [];
  // //     snapshot.forEach(childSnapshot => {
  // //       expenses.push({
  // //         id: childSnapshot.key,
  // //         ...childSnapshot.val()
  // //       });
  // //     });
  // //     console.log(expenses);
  // //   });
  // // database.ref('expenses').push({
  // //   amount: 500,
  // //   description: 'Rent',
  // //   note: 'My rent for the month',
  // //   createdAt: 846465324
  // // });

  // // database.ref('expenses').push({
  // //   amount: 75,
  // //   description: 'Phone Bill',
  // //   note: 'Ring Ring',
  // //   createdAt: 241234324
  // // });

  // // database.ref('expenses').push({
  // //   amount: 243.36,
  // //   description: 'Food',
  // //   note: 'Gotta eat that good food',
  // //   createdAt: 546465566524
  // // });

  // // database.ref('notes').push({
  // //   title: 'Course topics',
  // //   body: 'React Native, Angular, Python'
  // // });

  // // const firebaseNotes = {
  // //   notes: {
  // //     asd544sd: {
  // //       title: 'first note',
  // //       body: 'Here is a note'
  // //     },
  // //     gfgr343345: {
  // //       title: 'second note',
  // //       body: 'Here is another note'
  // //     }
  // //   }
  // // }

  // // const notes = [{
  // //   id: '12',
  // //   title:'first note',
  // //   body: 'This is my note'
  // // }, {
  // //   id: '761ase',
  // //   title:'another note',
  // //   body: 'This is my other note'
  // // }]

  // // database.ref('notes').set(notes);
  // // const onValueChange = database.ref().on('value', (snapshot) => {
  // //   const val = snapshot.val();
  // //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // // });

  // // database.ref()
  // //         .once('value')
  // //         .then((snapshot) => {
  // //           const val = snapshot.val();
  // //           console.log(val);
  // //         }).catch((e) => {
  // //           console.log(e);
  // //         })


  // // firebase.database().ref().set({
  // //   name: "Dustin Podell",
  // //   age: 21,
  // //   stressLevel: 6,
  // //   job: {
  // //     title: 'Software Developer',
  // //     company: 'Google'
  // //   },
  // //   location: {
  // //     city: 'Los Angeles',
  // //     country: 'USA'
  // //   }
  // // }).then(() => {
  // //   console.log('Data is saved');
  // // }).catch((e) => {
  // //   console.log('This failed', e);
  // // });

  // // firebase.database().ref().update({
  // //   stressLevel: 9,
  // //   'job/company': 'Amazon',
  // //   'location/city': 'Seattle'
  // // });

  // // database.ref('isSingle').remove().then(() => {
  // //   console.log('Removed succesfully')
  // // }).catch((e) => {
  // //   console.log('Error', e)
  // // });