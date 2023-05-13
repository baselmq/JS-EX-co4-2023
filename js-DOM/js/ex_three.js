//  div 1
let div = document.createElement("div");
let h1 = document.createElement("h1");
let form = document.createElement("form");
let input = document.createElement("input");
let addItem = document.createElement("button");
let span = document.createElement("span");
// div 2
let divList = document.createElement("div");

// textContent div 1
h1.textContent = "My Shopping List";
span.textContent = "Enter a new item: ";
addItem.textContent = "Add Item";

// appendChild div 1
div.appendChild(h1);
div.appendChild(span);
div.appendChild(input);
div.appendChild(addItem);

// appendChild div 2

document.body.appendChild(div);

//
addItem.addEventListener("click", function () {
  const item = input.value;
  if (item != "") {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    // style div 2
    div.style = "display: flex; margin-top:20px";
    deleteButton.style = "margin-left:10px";

    // className
    div.className = `item`;
    li.className = `item`;
    deleteButton.className = "delete-button";

    // textContent
    li.textContent = item;
    deleteButton.textContent = "delete";

    // appendChild
    li.appendChild(deleteButton);
    div.appendChild(li);
    divList.appendChild(div);
    document.body.appendChild(divList);

    deleteButton.addEventListener("click", function () {
      // Remove the div element from the list
      divList.removeChild(div);
    });
    // Clear and focus the input
    input.value = "";
    input.focus();
  }
//   arr.push(input.value);
//   divList.append(li);
//   li.append(removeItem);
//   li.textContent = "";
});
