"use strict";

//-------------------------------------
// Selecting and Manipulating Elements
//-------------------------------------
/*



*/

console.log(document.querySelector(".message").textContent); // Start guessing...

// Text
document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// Input
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); // 23
