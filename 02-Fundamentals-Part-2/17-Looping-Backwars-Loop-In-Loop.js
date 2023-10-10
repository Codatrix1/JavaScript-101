"use strict";
//-----------------------------------
// Looping Bcakwards and Loops in Loops
//-----------------------------------
/*




*/

const userArray = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
];

// 0,1,2...4
// 4,3.....0

// Forward Loop
for (let i = 0; i < userArray.length; i++) {
  console.log(userArray[i]);
}

// Backward Loop
for (let i = userArray.length - 1; i >= 0; i--) {
  console.log(i, userArray[i]);
}

/*
4 (3) ['Carrie', 'Saul', 'Nicholas']
3 'analyst'
2 46
1 'Quinn'
0 'Peter'

*/

//----------------
// Loop In Loop
//----------------

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----Starting Exercise: ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`🏋️: Repetition ${rep}`);
  }
}

/*
----Starting Exercise: 1
🏋️: Repetition 1
🏋️: Repetition 2
🏋️: Repetition 3
🏋️: Repetition 4
🏋️: Repetition 5
----Starting Exercise: 2
🏋️: Repetition 1
🏋️: Repetition 2
🏋️: Repetition 3
🏋️: Repetition 4
🏋️: Repetition 5
----Starting Exercise: 3
🏋️: Repetition 1
🏋️: Repetition 2
🏋️: Repetition 3
🏋️: Repetition 4
🏋️: Repetition 5
*/
