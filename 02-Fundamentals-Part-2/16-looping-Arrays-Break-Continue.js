"use strict";
//-----------------------------------
// Looping Arrays | Break | Continue
//-----------------------------------
/*
Most used Examples for "for" loop:

- loop through Arrays



*/

const userArray = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
  true,
];

// userArray[0];
// userArray[1];
// userArray[2];

for (let i = 0; i < userArray.length; i++) {
  console.log(userArray[i], typeof userArray[i]);
}

/*
Peter string
Quinn string
46 'number'
analyst string
(3) ['Carrie', 'Saul', 'Nicholas'] 'object'
*/

//------------
// EXAMPLE 1
//------------
const types = [];

for (let i = 0; i < userArray.length; i++) {
  types.push(typeof userArray[i]);
}

console.log(types); // (5) ['string', 'string', 'number', 'string', 'object', 'boolean']

//------------
// EXAMPLE 2
//------------
// CalcAges and print the new array

const years = [1991, 2007, 1969, 2020];

// Helper Function
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Main example
const birthYear = [];
for (let i = 0; i < years.length; i++) {
  birthYear.push(calcAge(years[i]));
}

console.log(birthYear); // (4) [46, 30, 68, 17]

//---------------------
// BREAK and Continue
//--------------------
//

const newUserArray = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
];

//-----------
// Continue
//----------
// Only log strings:If string not found, just skip
console.log("----ONLY STRING-----");

for (let i = 0; i < newUserArray.length; i++) {
  if (typeof newUserArray[i] !== "string") continue;
  console.log(newUserArray[i]);
}

/*
----ONLY STRING-----
Peter
Quinn
analyst
*/

//--------
// Break
//--------
console.log("----BREAK/TERMINATES AS SOON AS NUMBER IS FOUND-----");

// Only log strings:If string not found, IMMEDIATELY STOP
for (let i = 0; i < newUserArray.length; i++) {
  if (typeof newUserArray[i] === "number") break;
  console.log(newUserArray[i]);
}

/*
----BREAK/TERMINATES AS SOON AS NUMBER IS FOUND-----
Peter
Quinn
*/
