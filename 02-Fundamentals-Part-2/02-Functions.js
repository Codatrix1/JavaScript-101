"use strict";

//--------------
// Functions
//-------------

function logger() {
  console.log("My name is Peter");
}

// invoking / calling/ running function
logger(); // My name is Peter
logger(); // My name is Pater

//--------------------------
// Function with Parameters
//--------------------------

function foodProcesser(param1, param2) {
  const msg = `Juice with ${param1} apples and ${param2} oranges`;
  return msg;
}

console.log(foodProcesser(5, 2)); // Juice with 5 apples and 2 oranges
console.log(foodProcesser(6, 0)); // Juice with 6 apples and 0 oranges

//---------------------
// Built in function
//---------------------
const num1 = Number("23");
const num2 = +"23";

console.log(typeof num1); // number
console.log(typeof num2); // number
