//---------------------------------
// Equality Operators == VS ===
//---------------------------------

// === Strict Equality: No type Coercion
// == loose Equality

//-----------------------------------
// LOOSE EQUALITY COMPARISON ==
//---------------------------------
const firstNumber = 77;

if (firstNumber == "77") {
  console.log("This is the loose comparison");
}

//-----------------------------------
// STRICT EQUALITY COMPARISON ===
//---------------------------------
const age = 18;

if (age === 18) {
  console.log("You are an adult");
}

// You are an adult

const newAge = 19;
if (newAge === "19") {
  console.log("You are 19 years old");
}

// NO RESULT

//---------------------------------------------------------------------
const favNumber = prompt("Whats your fav number?");

console.log(favNumber); // 23
console.log(typeof favNumber); // string

if (favNumber === 23) {
  console.log(`23 is a cool number`);
}

// NO RESULT

//------------------------------------------------------------------
const newFavNumber = Number(prompt("Whats your fav number?"));

console.log(newFavNumber); // 54
console.log(typeof newFavNumber); // string

if (newFavNumber === 54) {
  console.log("54 is a cool number");
} else if (newFavNumber === 99) {
  console.log("99 is also a good number");
} else {
  console.log(`${newFavNumber} is the coolest number`);
}

// 89 is the coolest number

if (newFavNumber !== 99) {
  console.log("Why not 99?");
}

// Why not 99
