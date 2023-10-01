//--------------------
// SWITCH Statements
//-------------------

const day = "saturday";

switch (
  day // day === "monday" : STRICT Comparison
) {
  case "monday":
    console.log("Plan for the week");
    console.log("Go to coding meetup");
  // break;
  case "tuesday":
    console.log("Prepare for coding lessons");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

//----------------------------------------------------
if (day === "monday") {
  console.log("Plan for the week");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare for coding lessons");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😊");
} else {
  console.log("Invalid day!");
}

// Enjoy the weekend
// Enjoy the weekend 😊
