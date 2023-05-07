// cashFlowRatio
let cache = 1000;
let currentLiabilities = 500;
let cashFlowRatio = cache / currentLiabilities;
console.log("cash Flow Ratio = " + cashFlowRatio);

// netIncome
let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log("net Income = " + netIncome);

// totalAssets
let liabilities = 1000;
let equity = 500;
let totalAssets = liabilities + equity;
console.log("total Assets = " + totalAssets);

// netIncomeProfitSales
let profit = 1000;
let sales = 500;
let netIncomeProfitSales = profit * sales;
console.log("net Income Profit Sales = " + netIncomeProfitSales);

// Average
let num1 = 7;
let num2 = 9;
let num3 = 2;
// let num = [7, 9, 2];

let Average = (num1 + num2 + num3) / 3;
console.log("Average = " + Average);

// resultDiscount
let price = 150;
let discount = 30;
let resultDiscount = (price * discount) / 100;
console.log("result Discount = " + (price - resultDiscount));

// Age
let age = 20;
let ageLimit = age > 18 || age < 30 ? true : false;
console.log("Age limit = " + ageLimit);

// Exponential
let numberOne = 2;
let numberTwo = 3;
let exponential = numberOne ** numberTwo;
console.log("Exponential = " + exponential);

// Remainder
let number1 = 10;
let number2 = 4;
let remainder = number1 % number2;
console.log("Remainder = " + remainder);

let list = [
  typeof 100,
  typeof 73.9,
  typeof NaN,
  typeof "Water",
  typeof false,
  typeof (9 != 11),
  "Orang" + "e",
  "Orange" - "s",
  "4" + "8",
  "4" - "8",
  "name" + 3,
  "name" - 3,
  82 * "word",
  1 + "hello",
  "hello" + 1,
  1 + true,
  "hello" + true,
  typeof Infinity,
  1 === "1",
  1 == "1",
];
list.forEach((element) => {
  console.log(element);
});

// 2
console.log("Task 2 A  --------------------");

let strings = "Welcome to Orange";
console.log(strings.toUpperCase());
console.log(strings.substring(7, 10).toUpperCase());
console.log("Hello from " + strings.slice(11));
console.log(strings.toLowerCase());
console.log(strings.length);
console.log(`Welcome to "${strings.slice(11)}"`);
console.log(strings + " Jordan");

console.log("Task 2 B --------------------");

let text = "cactus";
let newText = text[0] + text.slice(1).replace(text.charAt("c"), "*");
console.log(newText);

