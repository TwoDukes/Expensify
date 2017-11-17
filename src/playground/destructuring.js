
//
// Object Destructuring
//

// const person = {
//   name: "Dustin",
//   age: 21,
//   location: {
//     city: 'Los Angeles',
//     temp: 70
//   }
// };

// const {name = "Anonymous", age = 404} = person
// // const name = person.name;
// // const age = person.age;


// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;

// console.log(`its ${temp} in ${city}.`);

// const book = {
//   title: "Ego is the enemy",
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {title, author} = book;
// const {name: publisherName = "Self Published"} = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// //skips first and doesnt destructure last index of address
// const [, city = "New york", state = "New York"] = address;
// console.log(`You are in ${city}, ${state}`);

// const item = ['coffee', "$2.00", '$2.50', "$2.75"];
// const [itemName, , medium] = item;

// console.log(`A medium ${itemName} costs ${medium} `)