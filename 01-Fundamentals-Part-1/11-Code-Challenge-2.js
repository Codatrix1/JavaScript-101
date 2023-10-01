//----------------------------------------------------------
// CODING CHALLENGE # 2
//----------------------------------------------------------

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.


Test data:
  - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
  - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement



*/

const weightJohn = 92;
const heightJohn = 1.95;

const weightMark = 78;
const heightMark = 1.69;

const johnBMI = weightJohn / heightJohn ** 2;
const markBMI = weightMark / heightMark ** 2;

console.log(
  `Mark BMI: ${markBMI.toFixed(2)} || John BMI: ${johnBMI.toFixed(2)}`
);

if (johnBMI > markBMI) {
  console.log(`John has a higher BMI ${johnBMI} than Mark ${markBMI}`);
} else {
  console.log(
    `Mark has a higher BMI ${markBMI.toFixed(2)} than John ${johnBMI.toFixed(
      2
    )}`
  );
}
