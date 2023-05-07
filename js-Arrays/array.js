// 1
let arrNumber = [1, 2, 3, 4, 5];
arrNumber.forEach((element) => {
  console.log(element);
});

// 2
console.log(arrNumber.map((item) => item * 2));

// 3
console.log(arrNumber.filter((item) => item % 2 == 0));

// 4
console.log(arrNumber.reduce((prev, curr) => prev + curr, 0));

// 5
let arrString = ["apple", "cherry", "banana"];
console.log(arrString.sort());

// 6
console.log(arrString.reverse());

// 7
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr);

// 8
console.log(arr.splice(2, 4));

// 9
console.log(arrNumber.splice(1, 1));

// 10
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.indexOf(3));

// 11
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.join(", "));

// 12
let arr12 = "1,2,3,4,5";
console.log(arr12.split(","));

// 13
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.length);

// 14
let arr14 = [1, 2, 3, 4, 5];
let str14 = "";
for (const iterator of arr14) {
  str14 += iterator + " ";
}
console.log(str14);

// 15
let arr15 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr15));

// 16
let obj = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(Array.from(obj));

// 17
let str1 = 1;
let str2 = 2;
let str3 = 3;
console.log(Array.of(str1, str2, str3));

// 18
let str18 = [1, 2, 3, 4, 5];
console.log(str18.fill(0, 0, 3));

// 19
let str19 = [1, 2, 3, 4, 5];
str19.copyWithin(1, 0, 1);
str19.copyWithin(2, 0, 1);
console.log(str19);

function pro(price, tax, ads) {
  let product = price + tax;
  let result = product + ads;
  console.log(result);
}
pro(200, 1.5, 40);
