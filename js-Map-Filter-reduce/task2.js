//! map --> array بتعدل على القيم الي ب
//! filter -->array بتفلتر العناصر الموجودة ب
//! reduce -->array بتجمع العناصر الموجودة ب
// 1
function cleanNames(arr) {
  let newArr = arr.map((item) => item.trim());
  console.log(newArr);
}
cleanNames([" injustice", " SuperMan", "Batman ", " flash    "]);

// 2
const miles = [10, 20, 30, 40];

function ConvertMilesToKm(arr) {
  let newArr = arr.map((item) => item * 1.609344);

  //   let newArr1 = arr.map(function (item) {
  //     return item * 1.609344;
  //   });
  return newArr;
}
console.log(ConvertMilesToKm(miles));
let km = ConvertMilesToKm(miles);
let totalDistanceInKilometers = km.reduce((pre, curr) => pre + curr, 0);
console.log(totalDistanceInKilometers);

// ! arrow functions
// function x(params) {
//   return params;
// }

// x((params) => params);

// 3
let arr = [1, 2, 3, 4, 5];
let newArr = arr
  .map((element) => element ** 2)
  .reduce((pre, curr) => pre + curr, 0);
console.log(newArr / arr.length);

// 4
let numbers = [1, 2, 3, 4, 5];

let plus4 = numbers.map((item) => item + 4);
console.log(plus4);

// 5
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleNumbers = numbers5
  .filter((item) => item % 2 == 0)
  .map((item) => item * 2)
  .reduce((pre, curr) => pre + curr, 0);
console.log(`doubleNumbers: `, doubleNumbers);

// 6
const words = ["apple", "banana", "cherry", "date"];
let upperCaseWords = words.map((item) => item.toUpperCase());
console.log(upperCaseWords);

// 7

const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];

let newHeros = heros.map((item, index) => {
  let newObj = { hero: item.name, power: item.power, id: index };
  console.log(newObj);
});

// 8

const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let result = inputWords.filter((item) => item.length >= 7);
console.log("result: ", result);

// 9
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers9.filter((item) => item % 2 == 1);
console.log("oddNumbers: ", oddNumbers);

let divisibleBy2or5 = numbers9.filter((item) => item % 2 == 0 || item % 5 == 0);
console.log("divisibleBy2or5: ", divisibleBy2or5);

let divisibleBy3Squared = numbers9
  .filter((element) => element % 3 == 0)
  .map((item) => item ** 2);
console.log("divisibleBy3Squared: ", divisibleBy3Squared);

let sumSquaredDivisibleBy5 = numbers9
  .filter((item) => item % 5 == 0)
  .map((item) => item ** 2)
  .reduce((pre, curr) => pre + curr);
console.log("sumSquaredDivisibleBy5: ", sumSquaredDivisibleBy5);

// 10
let num = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNum = num
  .filter((item) => item % 2 == 0)
  .map((item) => item * item);

console.log(`squaredEvenNum: `, squaredEvenNum);

let sum = num.reduce((pre, curr) => pre + curr);
console.log(`Sum of array elements: ${sum}`);

// 11

let countries = ["India", "United States", "Russia", "Japan", "China"];

// let filteredCountries = countries.filter(
//   (element) => element[0] != "U" && element[0] != "R"
// );
let filteredCountries = countries.filter(
  (element) => !element.startsWith("U") && !element.startsWith("R")
);
console.log(filteredCountries);

let upperCaseCountries = filteredCountries.map((item) => item.toUpperCase());
console.log(upperCaseCountries);

let totalCharacters = upperCaseCountries.reduce(
  (pre, curr) => pre + curr.length,
  0
);
console.log(totalCharacters);

// 12
const numbers12 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let numbersGreaterThan50 = numbers12.filter((item) => item > 50);
console.log(numbersGreaterThan50);
