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

  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];
  //     snapshot.forEach(childSnapshot => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });
  // database.ref('expenses').push({
  //   amount: 500,
  //   description: 'Rent',
  //   note: 'My rent for the month',
  //   createdAt: 846465324
  // });

  // database.ref('expenses').push({
  //   amount: 75,
  //   description: 'Phone Bill',
  //   note: 'Ring Ring',
  //   createdAt: 241234324
  // });

  // database.ref('expenses').push({
  //   amount: 243.36,
  //   description: 'Food',
  //   note: 'Gotta eat that good food',
  //   createdAt: 546465566524
  // });

  // database.ref('notes').push({
  //   title: 'Course topics',
  //   body: 'React Native, Angular, Python'
  // });

  // const firebaseNotes = {
  //   notes: {
  //     asd544sd: {
  //       title: 'first note',
  //       body: 'Here is a note'
  //     },
  //     gfgr343345: {
  //       title: 'second note',
  //       body: 'Here is another note'
  //     }
  //   }
  // }

  // const notes = [{
  //   id: '12',
  //   title:'first note',
  //   body: 'This is my note'
  // }, {
  //   id: '761ase',
  //   title:'another note',
  //   body: 'This is my other note'
  // }]

  // database.ref('notes').set(notes);
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // });

  // database.ref()
  //         .once('value')
  //         .then((snapshot) => {
  //           const val = snapshot.val();
  //           console.log(val);
  //         }).catch((e) => {
  //           console.log(e);
  //         })


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