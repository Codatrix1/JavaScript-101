"use strict";
//------------------------
// Game Logic
//-----------------------

// Generate Random number between 1-20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreLabel = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (scoreLabel > 1) {
      document.querySelector(".message").textContent = "💹 Too high!";
      scoreLabel--;
      document.querySelector(".score").textContent = scoreLabel;
    } else {
      document.querySelector(".message").textContent = "😓 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (scoreLabel > 1) {
      document.querySelector(".message").textContent = "👇 Too low!";
      scoreLabel--;
      document.querySelector(".score").textContent = scoreLabel;
    } else {
      document.querySelector(".message").textContent = "😓 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
