//-------------------------
// Truthy and Falsy Values
//-------------------------

// 5 Falsy Values: 0, "", null, undefined, NaN
// Everything else is Truthy

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

//----------------------------------------------
console.log(Boolean({})); // true
console.log(Boolean("Hello")); // true

//------------
// Example 1
//------------
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a Job!");
}

// You should get a Job!

//-------------
// Example 2
//--------------
let height;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Height is UNDEFINED

//------------------
// Example 3: BUG: 🐛 This can be fixed by using logical operators
//----------------
// Its a BUG because height can be 0 initially, its actually defined
let newHeight = 0;

if (newHeight) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Height is UNDEFINED
