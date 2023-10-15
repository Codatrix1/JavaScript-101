"use strict";
//------------------------
// Handling Click Events
//-----------------------
/*

An Event is something that happens on a page
- A mouse click
- mouse move
- key press

With event listeners, we wait for a certain event to happen
and then react to it

Callback function is called by the JS engine, and not by us

*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  }
});
