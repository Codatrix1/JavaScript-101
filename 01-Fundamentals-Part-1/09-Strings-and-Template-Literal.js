//-------------------------------
// Strings and Template Literal
//-------------------------------

const firstName = "Rick";
const yearNow = 2037;

const birthYear = 1991;
const currentJob = "Programmer";

const personDetails = `${firstName} is a ${
  yearNow - birthYear
} year old ${currentJob}`;

console.log(personDetails);

console.log(`String
in multiple
lines`);
