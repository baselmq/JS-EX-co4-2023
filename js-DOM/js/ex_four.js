let inputName = document.querySelectorAll("input")[0];
let inputScore = document.querySelectorAll("input")[1];
let addScore = document.querySelectorAll("button")[0];
let displayResults = document.querySelectorAll("button")[1];
let displayScores = document.querySelectorAll("button")[2];
let avgScore = document.getElementById("avg_score");
let heightScore = document.getElementById("height_score");
let divResult = document.getElementById("result");
let divScore = document.getElementById("score");
let names = [];
let scores = [];

divResult.style.display = "none";
divScore.style.display = "none";
//
//addScore
addScore.addEventListener("click", function () {
  const nameValue = inputName.value;
  const scoreValue = inputScore.value;
  if (
    nameValue.trim() != "" &&
    !isNaN(scoreValue) &&
    scoreValue.trim() != "" &&
    scoreValue >= 0 &&
    scoreValue <= 100
  ) {
    names.push(nameValue);
    scores.push(scoreValue);
    console.log(names);
    console.log(scores);
  } else {
    alert(
      `The score must be a number and the value must be between 0 and 100 `
    );
  }
});

//displayResults
displayResults.addEventListener("click", function () {
  if (scores.length != 0) {
    let length = scores.length;
    let sum = 0;

    scores.forEach((element) => {
      sum += parseInt(element);
    });
    let avg = sum / length;
    avgScore.textContent = avg;

    let maxNum = scores.sort(function (a, b) {
      return a - b;
    });

    heightScore.textContent = maxNum[scores.length - 1];
    divResult.style.display = "block";
  }
});

// displayResults
displayScores.addEventListener("click", function () {
  let table = document.querySelector("table");

  if (scores.length != 0) {
    for (let i = 0; i < names.length; i++) {
      let tableRow = document.createElement("tr");
      let tableDataName = document.createElement("td");
      let tableDataScore = document.createElement("td");

      tableDataName.textContent = names[i];
      tableDataScore.textContent = scores[i];

      tableRow.appendChild(tableDataName);
      tableRow.appendChild(tableDataScore);
      table.appendChild(tableRow);
    }
    divScore.style.display = "block";
  }
});
