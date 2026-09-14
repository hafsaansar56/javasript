var input = "G"; // Change value to test: "7", "g", etc.
var ascii = String(input).charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log(input + " is a Number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log(input + " is an Uppercase Letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log(input + " is a Lowercase Letter.");
} else {
    console.log(input + " is a Special Character.");
}

var num1 = 15;
var num2 = 8;

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2 + ".");
} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1 + ".");
} else {
    console.log("Both numbers are equal (" + num1 + " = " + num2 + ").");
}

var num =+prompt("Enter a number:");

if (num > 0) {
    console.log(num + " is Positive.");
} else if (num < 0) {
    console.log(num + " is Negative.");
} else {
    console.log("The number is Zero.");
}
var char = prompt("Enter a single character:");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log(true);
} else {
    console.log(false);
}

var correctPassword = "mySecretPassword123";
var userPassword = prompt("Please enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):")

if (time >= 0000 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format.");
}
