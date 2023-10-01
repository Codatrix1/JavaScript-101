//------------------------------------
// Type Conversion and Type Coercion
//------------------------------------

//----------------------------------------------------------------
// Type Conversion: We manually convert from one type to another
//----------------------------------------------------------------

const birthYear = "1991";
console.log(typeof birthYear); // string

console.log(typeof Number(birthYear)); // number
console.log(typeof +birthYear); // number

const firstName = "Peter";
console.log(Number(firstName)); // NaN

console.log(2024, String(2024)); // 2024 '2024'

//--------------------------------------------------------------------------
// Type Coercion: JavaScript automatically converts from one type to another
//-------------------------------------------------------------------------
// +, *, / triggers Numbers to string coercion

console.log(`I am ` + 30 + " years old"); // I am 30 years old
console.log(`I am ` + "30" + " years old"); // I am 30 years old

console.log("12" * "2"); // 24
console.log("10" / "2"); // 5

// - does not trigger coercion
console.log("100" - "8" - 1); // 91

//-------------------
// Guess the number
//-------------------
let n = "1" + 1;
n = n - 1;
console.log(n); // 10

//----------------
// More examples
//----------------
console.log(2 + 3 + 5 + "99"); // 1099

console.log(2 + 3 + 5 - "99"); // -89
