// Asks the engine to treat all JS code as newer version

"use strict";

// It will show an error in the node environment because we are using node not browser and if you see it in console it will show as 6.

alert(3 + 3);

// Let us talk about Data Types in JS

// String : It is always advisable to write string in double quotes.

let Name = "Sheetal";

// Number: The data type of age is number.

let age = 18;

// Boolean: The data type of isLoggedIn is boolean. It means it only returns two values, either true or false;

let isLoggedIn = false;

// You can also check the data types of variable using typeof

console.log(typeof Name);

console.log(typeof age);

console.log(typeof isLoggedIn);

let myName = null;

console.log(typeof myName);

// null is an object type

let isActive = undefined;

console.log(typeof isActive)

// undefined is an undefined type only.

// Let us now print the values

console.log("My name is: " + Name);

console.log("My age is: " + age);

console.log("Am I Logged In ?: " + isLoggedIn);