"use strict";

//-------------------------
// Introduction To Arrays
//------------------------
// IMPORTANT 🟢
/*
 - Two Most important Data Structures in JavaScript: Arrays and Objects
 - Only primitive values are IMMUTABLE
 - Arrays are MUTABLE since they are not primitive values
 - The whole array cannot be replaced since they are assigned with let, const, or var
   Only the elements can be mutated with some kind of logic

*/

//--------------------
// Creating Arrays:
//-------------------

const years = new Array(1990, 1992, 1998, 2024);
console.log(years); // (4) [1990, 1992, 1998, 2024]

const friendsList = ["Rick", "Morty", "Beth"];
console.log(friendsList); // (3) ['Rick', 'Morty', 'Beth']

// Accessing array items
console.log(friendsList[0]); // Rick
console.log(friendsList[1]); // Morty

//------------------------------
// Getting the length of array
//------------------------------
console.log(friendsList.length); // 3

//----------------------------------
// Getting the last item in an array
//---------------------------------
console.log(friendsList[friendsList.length - 1]);

//----------------------
// Mutating the array (Only the elements)
//----------------------
friendsList[2] = "Jessica";
console.log(friendsList); // (3) ['Rick', 'Morty', 'Jessica']

//-------------------
// MORE EXAMPLES
//------------------

const firstName = "Peter";
const friends = ["Carrie", "Saul", "Nicholas"];
const userDetails = [firstName, "Quinn", 2037 - 1986, "Programmer", friends];

console.log(userDetails);
// (5) ['Peter', 'Quinn', 51, 'Programmer', Array(3)]

console.log(userDetails.length);
// 5

//----------
// Exercise
//----------
const calcAge = (birthYear) => 2037 - birthYear;

const yearsArray = [1991, 1994, 1997, 2000];

const agesArray = [
  calcAge(yearsArray[0]),
  calcAge(yearsArray[1]),
  calcAge(yearsArray[2]),
  calcAge(yearsArray[yearsArray.length - 1]),
];

console.log(agesArray); // [46, 43, 40, 37]
