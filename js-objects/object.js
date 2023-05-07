// 1
let obj1 = { name: "Adam", age: 25, gender: "male" };
let sum1 = "";
for (const key in obj1) {
  sum1 += obj1[key] + " ";
}
console.log(sum1);

// 2
let obj2 = { name: "Adam", age: 25 };
obj2.gender = "male";

console.log(obj2);

// 3
let obj3 = { name: "Adam", age: 25 };
obj3["gender"] = "male";

console.log(obj3);

// 4
let obj4 = { name: "Adam", age: 25 };
console.log(obj4.name);

// 5
let obj5 = { name: "Adam", age: 25 };
console.log(obj5["name"]);

// 6
let obj6 = { name: "Adam", age: 25, gender: "male" };
let sum6 = "";
for (const key in obj6) {
  sum6 += key + ": " + obj6[key] + ", ";
}
console.log(sum6);

// 7
let obj7 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.keys(obj7));

// 8
let obj8 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(obj8));

// 9
let obj9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(obj9));

// 10
let obj10 = { name: "Adam", age: 25 };
let obj11 = { gender: "male" };

console.log(Object.assign(obj10, obj11));

// 11
let obj12 = { name: "Adam", age: 25 };
console.log(Object.freeze(obj12));

// 12
let obj13 = { name: "Adam", age: 25 };
console.log(Object.seal(obj13));
