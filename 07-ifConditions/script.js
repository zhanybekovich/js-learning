/**
 * If condition
 */
let year = 2020;

if (year === 2020) {
  console.log("2020");
}

/**
 * Falsy values
 * 0
 * ""
 * null
 * undefined
 * NaN
 */

/**
 * Else clause
 */
if (year === 2020) {
  console.log("2020");
} else {
  console.log("Not 2020");
}

/**
 * Else if conditions
 */
if (year === 2020) {
  console.log("2020");
} else if (year === 2021) {
  console.log("2021");
} else {
  console.log("Not 2020 or 2021");
}

/**
 * Conditional operator ?
 */
let accessAllowed;
let age = prompt("How old are you?", "");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

accessAllowed = age > 18 ? true : false;

// usage with multiple values
age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

/**
 * Tasks
 */
let a, b;
let result = a + b < 4 ? "Below" : "Over";

let login = "Employee";
message =
  login === "Employee"
    ? "hello"
    : login === "Director"
    ? "Greetings"
    : login === ""
    ? "No login"
    : "";
