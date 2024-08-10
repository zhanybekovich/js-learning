/**
 * alert()
 * instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog
 */
alert("Hello");

/**
 * prompt()
 * instructs the browser to display a dialog with an optional message prompting the user to input some text,
 * and to wait until the user either submits the text or cancels the dialog.
 * @param {message} - optional. A string of text to display to the user. Can be omitted if there is nothing to show in the prompt window
 * @return {string} - A string containing the text entered by the user, or null.
 */
let age = prompt("How old are you?", 100);
alert(`You are ${age} years old!`);

/**
 * confirm()
 * instructs the browser to display a dialog with an optional message,
 * and to wait until the user either confirms or cancels the dialog.
 * @param {message} - A string you want to display in the confirmation dialog.
 * @return {boolean} - A boolean indicating whether OK (true) or Cancel (false) was selected.
 * If a browser is ignoring in-page dialogs, then the returned value is always false.
 */
let isBoss = confirm("Are you the boss?");
alert(isBoss);

/**
 * Taks 1
 *
 * Create a web-page that asks for a name and outputs it.
 */
let userName = prompt("What is your name?");
alert(`Hello, ${userName}!`);
