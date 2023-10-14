"use strict";
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

for (let i = 0; i <= bills.length - 1; i++) {
  const eachTip = calcTip(bills[i]);
  tips.push(eachTip);
  totals.push(eachTip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// let sum = 0;

// const arr = [10, 20, 30, 40];

// for (let i = 0; i <= arr.length - 1; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

const calcAverage = function (arr2) {
  let sum = 0;

  for (let i = 0; i <= arr2.length - 1; i++) {
    // sum = sum + arr2[i];
    sum += arr2[i];
  }
  const avgValue = sum / arr2.length;

  return avgValue;
};

const arr2 = [10, 20, 30, 40];

console.log(calcAverage(arr2));

console.log(calcAverage(tips));
console.log(calcAverage(totals));
