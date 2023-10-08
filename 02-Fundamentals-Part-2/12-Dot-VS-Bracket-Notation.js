"use strict";
//-------------------------
// Dot VS Bracket Notation
//------------------------
// IMPORTANT 🟢
/*
 - When to use Dot Notation: When the exact property name is to be used 
 - When to use Bracket Notation: When the property name has 
   to be COMPUTED via an Expression
 - 
 -
 -

*/

// Object
const userDetails = {
  firstName: "Peter",
  lastName: "Quinn",
  age: 2037 - 1991,
  job: "Analyst",
  friends: ["Carrie", "Saul", "Nicholas"],
};

console.log(userDetails);

//----------------
// Dot Notation
//----------------
console.log(userDetails.firstName); // Peter
console.log(userDetails.location); // undefined

//-------------------
// Bracket Notation
//------------------
console.log(userDetails["firstName"]); // Peter

const nameKey = "Name";
console.log(userDetails[`first${nameKey}`]); // Peter
console.log(userDetails[`last${nameKey}`]); // Quinn

// USE CASE of Bracket Notation (Used Very Often in Real World)
// While getting data from a server

const interestedIn = prompt(
  "What do you want to know about the user? Select one option firstName, lastName, age, or job"
);

if (userDetails[interestedIn]) {
  console.log(userDetails[interestedIn]);
} else {
  console.log("Invalid request. Choose among firstName, lastName, age, or job");
}

//---------------------------------
// Adding a property to our object
//---------------------------------
userDetails.location = "Berlin";

console.log(userDetails);

//------------
// Challenge
//------------
// "Peter has 3 friends, and his Carrie is his best friend";

console.log(
  `${userDetails.firstName} has ${userDetails.friends.length} and ${userDetails.friends[0]} is his best friend`
);

// Peter has 3 and Carrie is his best friend
