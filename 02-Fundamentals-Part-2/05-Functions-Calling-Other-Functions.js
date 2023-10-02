"use strict";

//-----------------------------------
// Functions Calling Other Functions
//-----------------------------------

// Helper Function
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

// Main Function
const foodProcesser = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple and ${orangePieces} orange pieces`;
  return juice;
};

console.log(foodProcesser(2, 3)); // Juice with 8 apple and 12 orange pieces
