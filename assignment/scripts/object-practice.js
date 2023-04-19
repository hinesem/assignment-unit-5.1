console.log('***** Object Practice *****')
//if you finish the first section, in zoom chat "moving on to section 2"
// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Eric',
  lastName: 'Hines',
  hasSiblings: true,
  shoeCount: 2,
  favThreeFooods: ["Cane's", 'chipotle', 'coldstone'],
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFooods[0]);
console.log(me.favThreeFooods.slice(-1)[0]); //slice is a function and we're giving that function instructions to grab the last item in the array, thereby creating a new array
console.log(me.favThreeFooods[me.favThreeFooods.length -1]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
me.shoeCount = 3;
console.log(me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log(me);


// arrays are useful, but they have limitations. Say we have a user to track things, ie name, ID, role. and we could group these together

// let user = [123, 'Anne', 'admin']; // but we don't know what they mean, ie is their name "admin"? this is not super ergonomic. we don't want a context or ordered elements, and indexes, but a string tag

// this is a user object. we have a KEY and a VALUE id a value of 123.  the keys are STRINGS. can put "" around them, but don't have to.
// let user = {
//   id: 123,
//   firstName: 'Anne',
//   role: 'admin'
// };

//how do we get the data back out?
// ie in arrays we use user[1]

// console.log(user);
// console.log(user['firstName']); // string property name, or string key

// // another way:
// console.log(user.role); //this is "dot notation"

// console.log(console); //this means properties can be functions, booleans, arrays, any js value we'd like

// // with arrays
// let foods = ['apples', 'oranges', 'bahn mi'];
// console.log(foods.length); //here is the dot again
// console.log(foods);

// anything in JS not a prim value 'stirng, bool, value, null, undefined' is an object. arrays are object, dom nodes, funcitons. this means we can access named properties of them

// is there a diff btw this and json? yes and no, json is a way of serializing data to save it somewhere to send it out over the internet. json is fully jS compatible. it's a little stricter than a js notation would be. can't have a funciton as  prop value. but for simple stuff, yes it is similar
// json.stringify(user)

// let jsonUser = {
//   "id":123,
//   "firstName":"Anne",
//   "role":"admin"
// }

// say we want to modify our first name on the user...

user.firstName = 'Annabel';
console.log(user);

//mutating objects is weird, and ppl try to avoid it when possible. we'll probably start out doing it because it's easy. but when other parts of the code point to Anne, and then to Annabel

//we can stringify it. it's a string, not a primitive, it's not going anywhere "ok it was Anne, and now it's "Annabel"

//if we want to create  new property like last name:
//properties work like variables. nameing rules around values, but at the end of the day properties are not decalred  with "let". the property is inhe tied to the object "user"
user.lastName = 'Lee';
console.log(user);

//spread operat take object/array and smush it out. can use it to take one obj and pu. very convenient syntax, weird syntax. keep in mind it's a 'shallow copy' if you need a 'deep copy' structureclone is a function (nested properties). yes you can create copies in JS, but strucutredclone can be usd

let user2 = {
  middleName: 'Sue',
  firstName: 'Bob',
  ...user // user is an object, and created a new object in curly braces// spread is a newer bit of syntax. it's handy but it takes getting used to. more adv techn. it takes either array, or ojb, and spreads it out, smushing it into something
  
}
console.log(user2);

// todos.innerHTML = '<li>Object Practice</li>; <we've being doing this already, but now we know the mechanics

//more complex example of obj..

let mapPin = {
  location: { // we have nested objects
    lat: 45,
    long: -95
  },
  visitors: ['Annabel', 'Bob', 'Jubba'],
  isScenic: true,
  neighborhood: null,
  // greet: () => {
  //   console.log('Hello from my favorite spot!');
  // } 
} 



console.log(mapPin.location.lat);

let pinMatrix = [
  [null, mapPin]
]; // nested array, inside oject, inside array. we may have uses for something like this. which comes tot he clone point

console.log(pinMatrix[0][1].visitors[1]);// say we want to know the 2nd visitor  ... should log 'Bob'

//say cloning mapPin
let pin2 = {...mapPin} // ... is a "spread" which does top level properties. but for object values lat lot we are copying the singular reference to memory somwehre, and structureClone doesn't have this issue.  if you wnat sht you  know won't create wierd behavior, use structuredclone (deep clone) 

//  pin2 = strucutredClone(mapPin);

// how do you loop over an obj, and how do you check in a prop on an obj exists? say middlename. user 1 dosn't have one but user 2 does

// user.middleName = '';
if (Object.hasOwn(user, 'middleName')) {
  console.log(user.middleName);
}else {
  console.log('no middle name');
} // this has a little bit of a gotcha, bc what if No middle name is an empty string: say user.middleName = ''; ?
// you get undefined if you don't set a property ie if (true) we should use if (user.middleName === undefined). if yuo k now emtpy stirng isno t a valid middle name that's find, but still using undefinded we still have issues. bc in some cases a property w a value of undefined is valid, and this is diff thana a propterty wouth a value at all. object.hasOwn() is a new thing if your borowser is up to date, this will be standard going forward
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn1
// if (user.middlename) ... what if there is not middle name? hasOwn should be used(user, 'middleName')

// ^ this was 'property existence' is it there?

// looping
// the best way to loop over obj is to turn it into an array

// object.keys and object.value and these will give an array of all keys or values

console.log(Object.keys(user));
console.log(Object.values(user));

//let userValues = Object.values(user); // this makes more readable

for (let val of Object.values(user)) {
  console.log('This is a val:', val);
}

for (let key in user) { // dont' do this it does WIERD stuff, it's old and can create bugs. for of is a repl for "for in". "for in" goes over keys, and "for of" goes over values. For in will go traveling up prototype chain, if you have an object w a prototype chain it will loop over things you don't want. so user for (let key of Object.keys(user)) } ...
  console.log('This is a key:', key);
  console.log('This is the value:', user[key])//we can't do this bc value is undefined...but why? bc key is not js notation, user.('ro' + 'le')) for example. we need something we know. we have to use  user['ro' + 'le']
  //more commonly we'll do user[key] this is why you use bracket notation
}

// prototype cahing is how js does inheritance. any given object has a toString. methods aren't innumerable which is why we don't see it on the chain. this is part of obj oriented programming and js devs don't use this pattern anymore, but use "functional" programming. ie who's the paren of this thing. and I like to keep things sequestered

//maybe we're looping over keys of object

//is this going to make it easier on myself 6 mo from now to understand, when making names for variables ie don't do let i, for example

// ... spread smushing things out compared to rest. when combined w destructuring making arrays a joy to work with. 
