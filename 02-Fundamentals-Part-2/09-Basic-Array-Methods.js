"use strict";

//----------------------------------
// BASIC ARRAY METHODS (Operations)
//----------------------------------
/*

Add Elements
- push (to the end)
- unshift (to the start)

Remove Elements
- pop (removes last)
- shift (removes first)

Get the Index
- indexOf

Present or not (Boolean) ES6
USED TO WRITE CONDITIONALS
Strict Equality
- includes


KEY TAKEAWAYS (List of Basic Array Methods)
- push
- unshift
- pop
- shift
- indexOf
- includes (ES6)

*/

const fruits = ["apples", "oranges", "banana"];

//---------------
// Add elements
//---------------
// push, unshift
const newLength = fruits.push("pineapple"); // to last

console.log(fruits); // (4) ['apples', 'oranges', 'banana', 'pineapple']
console.log(newLength); // 4

fruits.unshift("mango");
console.log(fruits); // (5) ['mango', 'apples', 'oranges', 'banana', 'pineapple']

//---------------
// Remove elements
//---------------
// pop, shift

fruits.pop(); // last
console.log(fruits); // (4) ['mango', 'apples', 'oranges', 'banana']

const popped = fruits.pop();
console.log(popped); // banana

fruits.shift();
console.log(fruits); // (2) ['apples', 'oranges']

//---------------
// Get Index
//---------------
console.log(fruits.indexOf("apples")); // 0
console.log(fruits.indexOf("bob")); // -1

//---------------------------------
// Element present or not (Boolean) (ES6)
//---------------------------------
console.log(fruits.includes("hello")); // false
console.log(fruits.includes("oranges")); // true

// uses strict equality

fruits.push(12);
console.log(fruits); // (3) ['apples', 'oranges', 12]

console.log(fruits.includes("12")); // false

// USED TO WRITE CONDITIONALS

if (fruits.includes("12")) {
  console.log("The string 12 is present");
} else {
  console.log("No string 12 is in the array");
}

// No string 12 is in the array
