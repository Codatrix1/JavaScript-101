/*

7 Primitive Data Types

Numbers, Strings, Booleans, Undefined, Null, Symbols(ES2015/ES6), BigInt(ES2020)

*/

// Numbers
let firstNumber = 12;

// Strings
let firstName = "Ankur";

// Booleans
let javaScriptIsFun = true;
console.log(javaScriptIsFun); // true

console.log(typeof true); // boolean
console.log(typeof firstName); // string
console.log(typeof firstNumber); // number
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof "Morty"); // string

// Dynamic Typing -> New value type assigned
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun); // string

// Undefined
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year);
console.log(typeof year); // number

// Null
//🐛 BUG -> Not corrected due to legacy reasons
// the typeof null is actually null
console.log(typeof null); // Object
