//  ------------ Exercise 1 ------------
let outputOne = "";
for (var i = 1; i <= 10; i++) {
  outputOne += i + " ";
}
console.log(`Exercise 1 -->  ${outputOne}`);

//  ------------ Exercise 2 ------------
let outputTwo = "";
let w = 1;
while (w <= 10) {
  outputTwo += w + " ";
  w++;
}
console.log(`Exercise 2 -->  ${outputTwo}`);

//  ------------ Exercise 3 ------------
let outputThree = "";
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  outputThree += array[i] + " ";
}
console.log(`Exercise 3 -->  ${outputThree}`);

//  ------------ Exercise 4 ------------
let outputFour = "";

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    outputFour += i + " ";
  }
}
console.log(`Exercise 4 -->  ${outputFour}`);

//  ------------ Exercise 5 ------------
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`Exercise 5 -->  ${sum}`);

//  ------------ Exercise 6 ------------
let arr1 = [1, 2, 3, 4, 5];
let largest = arr1[0];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}
console.log(`Exercise 6 -->  ${largest}`);

//  ------------ Exercise 7 ------------
let arr2 = [5, 4, 3, 2, 1];
let smallest = arr2[0];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < smallest) {
    smallest = arr2[i];
  }
}
console.log(`Exercise 7 -->  ${smallest}`);

//  ------------ Exercise 8 ------------
let arr3 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum2 += arr3[i];
}
console.log(`Exercise 8 -->  ${sum2 / arr3.length}`);

//  ------------ Exercise 9 ------------
let num3 = 5;
factorial = 1;
for (let i = 1; i <= num3; i++) {
  factorial *= i;
}
console.log(`Exercise 9 -->  ${factorial}`);

//  ------------ Exercise 10 ------------
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let outputFib = a + " ";

  // while (b <= n) {
  //   outputFib += b + " ";
  //   let c = a + b;
  //   a = b;
  //   b = c;
  // }

  for (let i = 0; i < n; i++) {
    if (b <= n) {
      outputFib += b + " ";
      let c = a + b;
      a = b;
      b = c;
    }
  }

  console.log(`Exercise 10 -->  ${outputFib}`);
}
fibonacci(10);

//  ------------ Exercise 11 ------------
function primeNumber(n) {
  let outputPrime = "";
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      outputPrime += i + " ";
    }
  }
  console.log(`Exercise 11 -->  ${outputPrime}`);
}
primeNumber(20);

//  ------------ Exercise 12 ------------
let outputMultiplication = [];
let num = 5;
for (let i = 1; i <= 10; i++) {
  outputMultiplication.push(`${i} * ${num} = ${i * num}`);
}
console.log(`Exercise 12 -->  ${outputMultiplication.join(", ")}`);

//  ------------ Exercise 13 ------------
let output2D = "";
let arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < arr2D.length; row++) {
  for (let column = 0; column < arr2D[row].length; column++) {
    output2D += arr2D[row][column] + " ";
  }
}
console.log(`Exercise 13 -->  ${output2D}`);

//  ------------ Exercise 14 ------------
let arrReverse = [1, 2, 3, 4, 5];
let outputReverse = "";
for (let i = arrReverse.length; i > 0; i--) {
  outputReverse += i + " ";
}
console.log(`Exercise 14 -->  ${outputReverse}`);

// console.log(`Exercise 14 -->  ${arrReverse.reverse().join(" ")}`);

//  ------------ Exercise 15 ------------
let outputRange = "";
let arrRange = [1, 2, 3, 4, 5];
let start = 2;
let end = 4;

for (let i = start; i <= end; i++) {
  outputRange += arrRange[i] + " ";
}
console.log(`Exercise 15 -->  ${outputRange}`);

//  ------------ Exercise 16 ------------
let outputStep = "";
let arrStep = [1, 2, 3, 4, 5];
let step = 2;

for (let i = 0; i < arrStep.length; i += step) {
  outputStep += arrStep[i] + " ";
}
console.log(`Exercise 16 -->  ${outputStep}`);

//  ------------ Exercise 17 ------------
let arrCheck = [1, 2, 3, 4, 5];
numCheck = 4;
isInArray = false;
for (let i = 0; i < array.length; i++) {
  if (arrCheck[i] === numCheck) {
    isInArray = true;
  }
}
console.log(`Exercise 17 -->  ${isInArray}`);

//  ------------ Exercise 18 ------------

let arrFrequency = [1, 2, 1, 3, 2, 1];
let numFrequency = 1;
let count = 0;
for (let i = 0; i < arrFrequency.length; i++) {
  if (arrFrequency[i] === numFrequency) {
    count++;
  }
}
console.log(`Exercise 18 -->  ${count}`);
