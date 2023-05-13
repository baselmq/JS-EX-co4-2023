// 1
let myP = document.querySelector("p");
let arr = myP.innerText.split(" ");
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 8) {
    arr[i] = `<span style="background-color:yellow">${arr[i]}</span>`;

    console.log(arr[i].innerHTML);
  }
}
myP.innerHTML = arr.join(" ");

// 2
let link = document.createElement("a");
link.setAttribute("href", "https://www.google.com/");
link.textContent = "Google";

document.body.appendChild(link);

// 3
// let myDivClone = document.querySelector("div").cloneNode(true);
// let myPClone = myDivClone.childNodes[3];
// let newArr = myPClone.innerText.split(". ");
// for (let i = 0; i < newArr.length; i++) {
//   newArr[i] = `${newArr[i]}. <br>`;
// }
// myPClone.innerHTML = newArr.join("");
// myDivClone.appendChild(myPClone);
// document.body.appendChild(myDivClone);

let newArr = myP.innerHTML.split(". ");
for (let i = 0; i < newArr.length; i++) {
  newArr[i] = `${newArr[i]}. <br>`;
}
myP.innerHTML = newArr.join(" ");

// 4
let count = arr.length;
let headline = document.querySelector("h1");
let countParagraph = document.createElement("p");
countParagraph.innerText = `${count}`;
headline.after(countParagraph);
