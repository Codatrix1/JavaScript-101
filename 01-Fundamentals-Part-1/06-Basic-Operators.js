// Operators - Allows us to transform values OR combine multiple values

//----------------------------------------------
// 1) Mathematical or Arithematic Operators
//----------------------------------------------

const currentYear = 2037;

const ageRick = currentYear - 1959;
const ageMorty = currentYear - 2000;

console.log(ageRick, ageMorty); // 78 37

console.log(ageRick * 2, ageRick / 10, 5 ** 3); // 156 7.8 125
// 5 ** 3 means 5 raised to the power of 3 = 5 * 5 * 5

const firstName = "Morty";
const lastName = "Smith";
console.log(firstName + " " + lastName); // Morty Smith

//---------------------
// 2) typeof operator
//---------------------

console.log(typeof 23); // number
console.log(typeof true); // boolean
console.log(typeof ageRick); // number
console.log(typeof "hello"); // string

//-------------------------
// 3) Assignment Operator
//------------------------

let sum = 10 + 5; // 15

sum += 10; // sum = sum + 10 = 25

sum *= 4; // sum = sum * 4 = 100

sum++; // sum + 1 = 101

sum--; // sum - 1 = 100
sum--; // sum - 1 = 99

//--------------------------
// 4) Comparison operators
//--------------------------

// >, < , <=, >=

console.log(ageMorty > ageRick); // false
console.log(ageMorty >= 37); // true

const isFullAge = ageMorty >= 18;
console.log(isFullAge); // true

const now = 2023;
console.log(now - 1991 > now - 2020); // true
