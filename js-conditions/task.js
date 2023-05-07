// let age = 27 > 18 ? "You are an adult" : "You are not an adult";
// console.log(age);

let age = 27;
if (age > 18) {
  console.log("You are an adult");
}
// ---------------------------------------------
let score = 45;
if (score <= 50) {
  console.log("You failed the test");
}
// ---------------------------------------------
let fName = "John";
if (fName == "John") {
  console.log("Hello, John");
}
// ---------------------------------------------
let day = "Monday";
if (day != "Saturday" && day != "Sunday") {
  console.log("It's a weekday");
}
// ---------------------------------------------
let num = 4;
if (num % 2 == 0) {
  console.log("The number is even");
}
// ---------------------------------------------
let char = "a";

if (char.length === 1 && char.match(/[a-z]/i)) {
  console.log("It's a letter");
}
// ---------------------------------------------
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}
// ---------------------------------------------
let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}
// ---------------------------------------------
let y = -5;
if (y < 0) {
  console.log("y is a negative number");
}
// ---------------------------------------------
let z = 9;
if (z % 3 == 0) {
  console.log("z is a multiple ofs");
}
// ---------------------------------------------
let gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}
// ---------------------------------------------
let password = "mypassword123";
if (password >= 8) {
  console.log("Your password is strong");
}
// ---------------------------------------------
let age2 = 30;
if (age2 >= 18 && age2 <= 65) {
  console.log("You are of working age");
}
// ---------------------------------------------
let color = "red";
if (color == "red" || color == "green" || color == "blue") {
  console.log("color is a primary color " + color);
}
// ---------------------------------------------
function isValidNumber(number) {
  if (!isNaN(number)) {
    console.log(number + " is a valid number");
  } else {
    console.log(number + " is not a number");
  }
}
isValidNumber(11);
isValidNumber("19");
isValidNumber("xyz");
isValidNumber("17.5");
isValidNumber("21F");
