// let array = ["Coding", "Academy", "By", "Orange"];
let arr = ["Coding", "Academy", "By", "Orange"];

// 1
console.log("Exe 1: ");
arr.push("Jordan");
console.log(arr);
arr.pop();

// 2
console.log(arr.slice(0, 2));

// 3
arr.unshift("Welcome", "To");
console.log(arr);

// 4
arr.splice(0, 3);
console.log(arr);

// 5
arr.unshift("Coding");
console.log(arr.join(" "));

// 6
console.log(arr);

// 7
arr.splice(1, 2);
console.log(arr);

console.log("\nExe 2: ");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1
vegetables.pop();
console.log(vegetables);
// 2
fruit.shift();
console.log(fruit);
// 3
console.log(`indexOf orange: ${fruit.indexOf("orange")}`);
// 4
fruit.push(fruit.indexOf("orange"));
console.log(fruit);
// 5
console.log(`vegetables length: ${vegetables.length}`);
// 6
vegetables.push(vegetables.length);
console.log(vegetables);
// 7
let food = fruit.concat(vegetables);
console.log(food);
// 8
food.splice(3, 2);
console.log(food);
// 9
console.log(food.reverse());
//10
console.log(food.join(" "));

// Function
console.log("\nFunction 1: ");
// 1
function convertToArray() {
  let string = "Orange Jordan";
  let arr = string.split(" ");
  console.log(arr);
}
convertToArray();

// 2
function convertNumToHidden() {
  //   let number = "776807777";
  //   let arr = number.split("");
  //   console.log(arr);
  //   arr.splice(0, 6);
  //   arr.unshift("*", "*", "*", "*", "*", "*", "*");
  //   console.log(arr.join(""));

  let number = "0776807777";
  let hidden = number.slice(0, 7).replace(/\d/g, "*") + number.slice(7);
  console.log(hidden);
}
convertNumToHidden();

// 3
function hideEmail(email) {
  let arrEmail = email.split("@");
  let hide = arrEmail[0].slice(6);
  let partHide = arrEmail[0].replace(hide, "...");
  console.log(partHide + "@" + arrEmail[1]);
}
let email = "orange_academy@orange.jo";
hideEmail(email);

// 4
function capitalize(string) {
  let arrString = string
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  console.log(arrString);
}
let string = "coding academy by orange";
capitalize(string);

// 5
function flipsNumber(number) {
  console.log(parseInt(number.toString().split("").reverse().join("")));
}
number = 92485;
flipsNumber(number);

// 6
let a = 3;
let b = 4;
console.log(`original --> a: ${a} b: ${b}`);

// oneWay
function swapsOne(a, b) {
  let n = a;
  a = b;
  b = n;
  console.log(`swapsOne --> a: ${a} b: ${b}`);
}
swapsOne(a, b);

// twoWay
function swapsTwo(a, b) {
  let arr = [a, b];
  a = arr[1];
  b = arr[0];

  console.log(`swapsTwo --> a: ${a} b: ${b}`);
}
swapsTwo(a, b);

// threeWay
function swapsThree(a, b) {
  [a, b] = [b, a];
  console.log(`swapsThree --> a: ${a} b: ${b}`);
}
swapsThree(a, b);

// 7
function removeCharacter(string, index) {
  let removeChar = string.split("");
  removeChar.splice(index, 1);
  console.log(removeChar.join(""));
}
removeCharacter("Orange", 3);

// 8
function mergesTwoString(s1, s2) {
  console.log(s1.slice(1) + s2.slice(1));
}
let s1 = "lora";
let s2 = "inge";
mergesTwoString(s1, s2);

// 9
function ensures(char, string) {
  console.log(
    string
      .split(" ")
      .every((item) => item[0] == char || item[string.length - 1] == char)
  );
}
ensures("o", "orange");

// 10

function stringToArray(string) {
  let arr = [];
  let chars = "";
  for (let i = 0; i < string.length; i++) {
    chars += string[i];
    if (string[i] === " ") {
      arr.push(chars);
      chars = "";
    }
  }
  arr.push(chars);
  console.log(arr);
}
stringToArray("Coding Academy by Orange");

// 11
function reorderCharacter(string) {
  sort = string.toLowerCase().split("").sort().join("");
  console.log(sort);
  string;
}
reorderCharacter("Orange");

// Objects
// 1
console.log("\nObjects --------------");
let person = { name: "Basel", age: 26, height: "174" };
let mercedes = {
  nameCar: "mercedes",
  model: "g-class",
  color: "black",
};
function getProperties(obj) {
  let arr = Object.keys(obj);
  console.log(arr);
}
getProperties(person);

// 2
function countProperties(obj) {
  let arr = Object.keys(obj).length;
  console.log(arr);
}
countProperties(person);


// 3
function mergeObjects(obj1, obj2) {
  // let margeCar = Object.assign(obj1, obj2);
  let margeCar = { ...obj1, ...obj2 };
  console.log(margeCar);
}

mergeObjects(person, mercedes);

// 4
function copyObjectToUpperCase(obj) {
  let copy = {};
  for (const key in obj) {
    copy[key.toUpperCase()] = obj[key].toUpperCase();
  }
  console.log(copy);
}
copyObjectToUpperCase(mercedes);

// 5
function filterNonNullProperties(obj) {
  newObj = {};
  for (const key in obj) {
    if (obj[key] != null) {
      newObj[key] = obj[key];
    }
  }
  console.log(newObj);
}
const obj = { name: "John", age: null, city: "New York" };
filterNonNullProperties(obj);

// 6
function getObjectKeysSorted(obj) {
  let arr = Object.keys(obj);
  console.log(arr.sort());
}

getObjectKeysSorted(person);
