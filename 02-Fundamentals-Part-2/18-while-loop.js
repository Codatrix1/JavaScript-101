"use strict";
//-----------------------------------
// "while" Loop
//-----------------------------------
/*

Use Case of for Loop:
When we know exactly how many times the loop will have to run

Use Case of While Loop:
When we do not know how many times the loop has to run, we use "while loop"
OR Even if there is no need for the loop to run


*/

//-----------------------------------------------------
// for loop runs as long as the the condition is TRUE
//----------------------------------------------------

for (let i = 1; i <= 3; i++) {
  console.log(`Lifting Weights ${i} 🏋️`);
}
// Lifting Weights 1 🏋️
// Lifting Weights 2 🏋️
// Lifting Weights 3 🏋️

//---------------
// while loop
//--------------
let counter = 1;

while (counter <= 3) {
  console.log(`Lifting Weights ${counter} 🏋️`);
  counter++;
}

// Lifting Weights 1 🏋️
// Lifting Weights 2 🏋️
// Lifting Weights 3 🏋️

//------------------------------------------------------------
// EXERCISE: No idea how many times we need to roll the dice;
//------------------------------------------------------------
// Roll the dice until 6 is found

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("The Loop Ends....");
  }
}
