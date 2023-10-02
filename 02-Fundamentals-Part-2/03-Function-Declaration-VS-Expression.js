"use strict";

//------------------------------------------------
// Function Declaration VS Function Expressions
//------------------------------------------------

//-------------------------
// Function Declaration
//--------------------------
// Can be called anywhere in the code due to HOISTING
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//------------------------------------------
// Function Expression (Anonymous Function)
//------------------------------------------
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1998);

console.log(age1, age2); // 46 39
