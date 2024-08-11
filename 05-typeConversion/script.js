/**
 * String conversion
 */
let value = true;
value = String(value);
console.log(typeof value);

console.log(typeof "" + 20);

/**
 * Numeric conversion
 * Rules
 * undefined => NaN
 * null => 0
 * boolean => 0 or 1
 * string => white spaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
 */
console.log("6" / "2");
console.log(Number("5"));
console.log(+"123");
console.log(parseInt("123"));
console.log(parseFloat("123.456"));

/**
 * Boolean conversion
 */
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
