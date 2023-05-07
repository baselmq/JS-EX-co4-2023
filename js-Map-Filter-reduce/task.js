// 1
function cleanNames(arr) {
  let newArr = arr.map((item) => item.trim());
  console.log(newArr);
}

cleanNames([" injustice", " SuperMan", "Batman ", " flash    "]);

// 2
function convertMilesToKm(miles) {
  const km = miles.map((mile) => mile * 1.60934);
  const totalDistanceInKilometers = km.reduce((acc, curr) => acc + curr, 0);
  return { km, totalDistanceInKilometers };
}

const miles = [10, 20, 30, 40];
const { km, totalDistanceInKilometers } = convertMilesToKm(miles);
console.log(km);
console.log(totalDistanceInKilometers);

// 3
let arr = [1, 2, 3, 4, 5];
let sumOfSquares = arr.reduce((acc, curr) => acc + curr ** 2, 0);
let avg = sumOfSquares / arr.length;
console.log(avg);

// 4
const number = [1, 2, 3, 4, 5];
let plus4 = number.map((item) => item + 4);
console.log(plus4);

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenDoubleEven = numbers
  .filter((item) => item % 2 == 0)
  .map((item) => item * 2)
  .reduce((pre, curr) => pre + curr, 0);

console.log(evenDoubleEven);

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

let newArr = heros.map((item, index) => {
  let newObj = { hero: item.name, power: item.power, id: index };
  return newObj;
});
console.log(newArr);
// 8

inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function greaterThan7Letters(arr) {
  let newArr = arr.filter((item) => item.length >= 7);
  console.log(newArr);
}
greaterThan7Letters(inputWords);

// 9
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers9.filter((element) => element % 2 == 1);
console.log(oddNumbers);

let divisibleBy2or5 = numbers9.filter(
  (element) => element % 2 == 0 || element % 5 == 0
);
console.log(oddNumbers);

let divisibleBy3Squared = numbers9
  .filter((item) => item % 3 == 0)
  .map((item) => item ** 2);
console.log(divisibleBy3Squared);

let sumSquaredDivisibleBy5 = numbers9
  .filter((item) => item % 5 == 0)
  .map((item) => item ** 2)
  .reduce((pre, curr) => pre + curr, 0);
console.log(sumSquaredDivisibleBy5);

// 10
let num = [11, 22, 33, 46, 75, 86, 97, 98];

let squaredEvenNum = num
  .filter((item) => item % 2 == 0)
  .map((item) => item * item);
console.log(`squaredEvenNum: ${squaredEvenNum}`);

let sum = num.reduce((pre, curr) => pre + curr, 0);
console.log(`Sum of array elements: ${sum}`);

// 11
let countries = ["India", "United States", "Russia", "Japan", "China"];

let filteredCountries = countries.filter(
  (country) => country[0] != "U" && country[0] != "R"
);
// const filteredCountries = countries.filter(
//   (country) => !country.startsWith("U") && !country.startsWith("R")
// );
console.log(filteredCountries);

let upperCaseCountries = filteredCountries.map((country) =>
  country.toUpperCase()
);
console.log(upperCaseCountries);

let totalCharacters = upperCaseCountries.reduce(
  (total, country) => total + country.length,
  0
);
console.log(totalCharacters);

// 12
const numbers12 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let numbersGreaterThan50 = numbers12.filter((element) => element > 50);
console.log(numbersGreaterThan50);
