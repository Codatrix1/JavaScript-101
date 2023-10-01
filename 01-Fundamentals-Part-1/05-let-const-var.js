// let, const, var

// let, const --> Introduced in ES6/2015

//-----------------------------
// let (Mutable) BLOCK SCOPED
//-----------------------------
let age = 30;
age = 31;

let year;
year = 1991;

console.log(age, year); // 31 1991

//--------------------
// const (Immutable)
//---------------------
const birthYear = 1991;
// birthYear = 1990 // Uncaught SyntaxError: Missing initializer
// const job; // Uncaught SyntaxError: Missing initializer in const declaration (at script.js:21:7)

//--------------------------------------------
// var (Legacy -> Mutable) FUNCTION SCOPED
//--------------------------------------------
var job = "programmer";
job = "writer";

console.log(job); // writer

//----------------------------------------------------------------
// Creating variable in the GLOBAL SCOPE . 🚫 Dont Ever Do this
//----------------------------------------------------------------
lastName = "Smith";
console.log(lastName);
