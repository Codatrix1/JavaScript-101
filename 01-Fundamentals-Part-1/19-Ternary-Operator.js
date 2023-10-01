//-------------------------------------
// The Conditional (TERNARY) Operator
//-------------------------------------
// It has 3 parts
// Condition ? Do this : Else Do this

//-------------
// Example 1
//------------
const ageNow = 11;

ageNow >= 18
  ? console.log("You are of age")
  : console.log("You are NOT of AGE");

// You are NOT of AGE

let drink;
if (ageNow >= 18) {
  drink = "wine🍷";
} else;
{
  drink = "water💧";
}
console.log(drink);

// water💧

//-----------
// Example 2
//-----------
const newAge = 24;

console.log(`I like to drink ${newAge >= 18 ? "wine🍷" : "water 💧"}`);

// I like to drink wine🍷
