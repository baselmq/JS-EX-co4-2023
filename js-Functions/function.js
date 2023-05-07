// 1
function findSmallest(array) {
  return Math.min(...array);
}

console.log(findSmallest([30, 45, 60, 7]));

// 2
function AlphabeticalOrder(string) {
  return string.split("").sort().join("");
}
console.log(AlphabeticalOrder("hello"));

// 3
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(8));

// 4
function oddOrEven(num) {
  return num % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(9));

// 5

function evenNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6
function numbersOnly(arr) {
  let array = [];
  arr.forEach((element) => {
    if (!isNaN(element)) {
      array.push(element);
    }
  });
  return array;
}
console.log(numbersOnly(["Ayham", 3, 7, "Alaa", 13, "coding"]));

// 7
function addUp(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(addUp(8));

// 8
function minMaxLengthAverage(arr) {
  let array = [];
  let length = arr.length;
  arr.sort((a, b) => a - b);
  array.push(arr[0]);
  array.push(arr[length - 1]);
  array.push(length);
  let avg = arr.reduce((prev, curr) => prev + curr, 0);
  array.push(avg / length);

  // let sum = 0;
  // for (let i = 0; i < length; i++) {
  //   if (arr[i] < arr[0]) {
  //     array[0] = arr[i];
  //   }
  //   if (arr[i] > arr[0]) {
  //     array[1] = arr[i];
  //   }
  //   array[2] = length;
  //   sum += arr[i];
  // }
  // array[3] = sum / length;

  return array;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// 9

function romanNumbers(number) {
  const romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let romanNumeral in romanNumeralMap) {
    while (number >= romanNumeralMap[romanNumeral]) {
      result += romanNumeral;
      number -= romanNumeralMap[romanNumeral];
    }
  }
  return result;
}
console.log(romanNumbers(1989));

// 10
function countWords(string) {
  return string.split(" ").length;
}

console.log(countWords("hello from CodingAcademy!"));

// 11
function MultiplyByLength(arr) {
  let array = [];
  let length = arr.length;
  arr.forEach((element) => {
    array.push(element * length);
  });
  return array;
}

console.log(MultiplyByLength([4, 2, 5]));

// 12
function checkEnding(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1[str1.length - 1] == str2[i]) {
      return true;
    } else return false;
  }
}

console.log(checkEnding("CodingSchool", "Ac"));

// 13

function doubleChar(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    str += string[i] + string[i];
  }
  return str;
}
console.log(doubleChar("Coding"));

// 14
function findIndex(arr, element) {
  // return arr.findIndex((item) => item === element);
  return arr.indexOf(element);
}

console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));

// 15
function getAbsSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += Math.abs(element);
  });
  return sum;
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));
