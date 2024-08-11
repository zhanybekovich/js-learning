/**
 * Logical operators
 * || OR
 * && AND
 * ! NOT
 * ?? NULLISH COALESCING
 */

/**
 * OR finds the first truthy value
 *
 */
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

if (1 || 0) {
  // works just like if( true || false )
  alert("truthy!");
}

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

// getting the first truthy value
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

// short circuiting
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
true || console.log("not printed");
false || console.log("printed");

/**
 * AND returns true if both operands are truthy and false otherwise
 */
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

// “&&” finds the first falsy value
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

// When all values are truthy, the last value is returned
alert(1 && 2 && 3); // 3, the last one

// && is higher than ||

/**
 * ! (NOT) returns the inverse value
 */
console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type
console.log(!!"string"); // true
console.log(!!null); // false

/**
 * Task: write an if condition to check if the age is between 14 and 90 inclusively
 */
let age = 20;
if (age >= 14 && age <= 90) {
  console.log("Age is between 14 and 90");
}

/**
 * Task: write an if condition to check that age is NOT between 14 and 90 inclusively
 * Create two variants: first one with NOT and second one without
 */
if (!(age >= 14 && age <= 90)) {
  console.log("Age is not between 14 and 90");
}

if (age < 14 || age > 90) {
  console.log("Age is not between 14 and 90");
}
