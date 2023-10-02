"use strict";

//------------------------------------------------------
// Arrow Functions (ES6) (DO NOT GET own "this" keyword)
//------------------------------------------------------

//------------------------------------------
// Function Expression (Anonymous Function)
//------------------------------------------
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1998);
console.log(age2);

//----------------------------------------------
// Arrow Function (NO "this" Keyword available)
//----------------------------------------------

// IMPLICIT Return
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3); // 37

//--------------------------------------------
const yearsAfterRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsAfterRetirement(1991, "Peter"));
console.log(yearsAfterRetirement(1980, "Bob"));

// Peter retires in 19 years
// Bob retires in 8 years
