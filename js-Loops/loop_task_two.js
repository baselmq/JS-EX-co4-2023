// --------------------------------Exercise one--------------------------------
console.log("\n***---------------- Exercise one ----------------***");
let times = 1;
let array = [];
while (times <= 2) {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      array.push(i);
    }
  }
  console.log(`time ${times} -->  ${array.join(" ")}`);
  array = [];
  times++;
}
console.log("\n***---------------- Exercise two ----------------***");

// --------------------------------Exercise two--------------------------------
let time = 2;
let number = 1;
let count = 0;
let arr = [];
for (let i = 1; i <= time * 50; i++) {
  if (number % 2 == 0) {
    arr.push(number);
  }
  number++;
  if (number > 50) {
    number = 1;
    console.log(`time ${++count} -->  ${arr.join(" ")}`);
    arr = [];
  }
}

// --------------------------------Exercise three--------------------------------
console.log("\n***---------------- Exercise three ----------------***");

function even_odd(time) {
  let arrEven = [];
  let arrOdd = [];
  let count = 0;
  while (time > 0) {
    for (let i = 1; i <= 50; i++) {
      if (i % 2 === 0) {
        arrEven.push(i);
      } else {
        arrOdd.push(i);
      }
    }
    time--;
    count++;
    console.log(`Even time ${count} -->  ${arrEven.join(" ")}`);
    console.log(`Odd time ${count} -->  ${arrOdd.join(" ")}`);
    arrEven = [];
    arrOdd = [];
  }
}
even_odd(2);

// --------------------------------Exercise four--------------------------------
console.log("\n***---------------- Exercise four ----------------***");
let output = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    output.push("FizzBuzz");
  } else if (i % 3 == 0) {
    output.push("Fizz");
  } else if (i % 5 == 0) {
    output.push("Buzz");
  } else {
    output.push(i);
  }
}
console.log(output.join(", "));

// --------------------------------Exercise five--------------------------------
console.log("\n***---------------- Exercise five ----------------***");
function FizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return num.toString();
  }
}
// for (let i = 1; i <= 100; i++) {
//   console.log(FizzBuzz(i));
// }

console.log(FizzBuzz(1));

// --------------------------------Exercise six--------------------------------

console.log("\n***---------------- Exercise six ----------------***");
let outputRecursive = [];
let numRecursive = 1;
function recursiveFizzBuzz(num) {
  if (num < numRecursive) {
    return;
  } else {
    if (numRecursive % 3 == 0 && numRecursive % 5 == 0) {
      outputRecursive.push("FizzBuzz");
    } else if (numRecursive % 3 == 0) {
      outputRecursive.push("Fizz");
    } else if (numRecursive % 5 == 0) {
      outputRecursive.push("Buzz");
    } else {
      outputRecursive.push(numRecursive.toString());
    }
    numRecursive++;
    recursiveFizzBuzz(num);
  }
}

recursiveFizzBuzz(15);
console.log(outputRecursive.join(", "));

// --------------------------------Exercise seven--------------------------------
console.log("\n***---------------- Exercise seven ----------------***");

function convertToBanknotes(amount, banknotes) {
  let result = [];
  for (let i = 0; i < banknotes.length; i++) {
    while (amount >= banknotes[i]) {
      result.push(banknotes[i]);
      amount -= banknotes[i];
    }
  }
  return result;
}
const amount = 57;
const banknotes = [25, 10, 5, 1];
const result = convertToBanknotes(amount, banknotes);
console.log(result);

// --------------------------------Exercise eight--------------------------------
console.log("\n***---------------- Exercise eight ----------------***");

function CheckCharacter(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  console.log(count);
}

CheckCharacter("Coding Academy by Orange", "o");

// --------------------------------Exercise nine--------------------------------
console.log("\n***---------------- Exercise nine ----------------***");
console.log("\nA:-----");

for (var i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("\nB:-----");
for (var i = 3; i <= 29; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log("\nC:-----");
for (var i = 12; i >= -14; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("\nD:-----");
for (var i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// --------------------------------Exercise ten--------------------------------
console.log("\n***---------------- Exercise ten ----------------***");

let string = "CodingAcademy";
let arrayTen = [7, 500, "KH404", "black", 36];

for (let i = 0; i < arrayTen.length; i++) {
  console.log(arrayTen[i]);
}

for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);
}

// --------------------------------Exercise eleven--------------------------------
console.log("\n***---------------- Exercise eleven ----------------***");

let array11 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let even = [];
let odd = [];

array11.forEach((element) => {
  if (element % 2 == 0) {
    even.push(element);
  } else {
    odd.push(element);
  }
});

console.log("Evens array:", even);
console.log("Odds array:", odd);

// --------------------------------Exercise twelve--------------------------------
console.log("\n***---------------- Exercise twelve ----------------***");

let protein = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
let grain = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
let vegetable = [
  "peas",
  "green beans",
  "kale",
  "edamame",
  "broccoli",
  "asparagus",
];
let beverage = ["juice", "milk", "water", "soy milk", "soda", "tea"];
let dessert = [
  "apple",
  "banana",
  "more kale",
  "ice cream",
  "chocolate",
  "kiwi",
];
function createMeals(unmOfMeals) {
  var arrMeals = [protein, grain, vegetable, beverage, dessert];
  var arrays = [];
  for (let r = 0; r < unmOfMeals; r++) {
    arrays.push([]);

    for (let c = 0; c < 5; c++) {
      let random = Math.floor(Math.random() * 6);
      arrays[r].push(arrMeals[c][random]);
    }
  }

  for (var i = 0; i < arrays.length; i++) {
    console.log(`Meal No${i + 1} --> ${arrays[i]}`);
  }
}
createMeals(2);
