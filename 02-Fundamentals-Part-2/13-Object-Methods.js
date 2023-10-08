"use strict";
//-------------------------
// Object Methods
//------------------------
// IMPORTANT 🟢
/*
 - Function expression can be used as a property in an object, just like calcAge
 - "this" = the object on which the method is called
 -
 -

*/

//----------
// Object
//---------
const user = {
  firstName: "Peter",
  lastName: "Quinn",
  birthYear: 1991,
  job: "Analyst",
  friends: ["Carrie", "Saul", "Nicholas"],
  hasDriversLicense: true,

  // Without "this"
  calcAge1: function (birthYear) {
    return 2037 - birthYear;
  },

  // With "this" keyword
  calcAge2: function () {
    // console.log(this); // LOGS THE WHOLE OBJECT
    return 2037 - this.birthYear;
  },

  // With "this" keyword: Adding property for "age" Calculating just once
  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()} year old ${
      this.job
    }, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license and has ${this.friends.length} friends`;
  },
};

// Without "this"
console.log(user.calcAge1(1991)); // 46
console.log(user["calcAge1"](1991)); // 46

// With "this" keyword
console.log(user.calcAge2()); // 46

// Access added property
console.log(user.calcAge3());
console.log(user.age);

console.log(user.getSummary()); // Peter is a 46 year old Analyst, and he has a drivers license and has 3 friends
