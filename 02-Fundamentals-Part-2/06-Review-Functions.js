"use strict";

//---------------------
// Reviewing Functions
//---------------------

// Helper Function
const calcAge = function (years) {
  return 2037 - years;
};

// Main Function
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} already retired 🥳`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Peter"));
console.log(yearsUntilRetirement(1960, "Bob"));

/*

Peter retires in 19 years
19
Bob already retired 🥳
-1

*/

//--------------------------------
// 3 Types of Function: Review
//------------------------------

// Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Expression (Anonymous) (✅ "this" keyword)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Functions ( NO ❌ "this" keyword)
const calcAge3 = (birthYear) => 2037 - birthYear;

//----------------------------------------------------------------
