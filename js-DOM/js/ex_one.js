// 1
// let myDiv = document.createElement("div");
// let myForm = document.createElement("form");
// let labelUsername = document.createElement("label");
// let inputUsername = document.createElement("input");
// let labelPassword = document.createElement("label");
// let inputPassword = document.createElement("input");
// let labelConfirmPass = document.createElement("label");
// let inputConfirmPass = document.createElement("input");

// myForm.className = "flex-form";
// myForm.appendChild(labelUsername);
// myForm.appendChild(inputUsername);
// myForm.appendChild(labelPassword);
// myForm.appendChild(inputPassword);
// myForm.appendChild(labelConfirmPass);
// myForm.appendChild(inputConfirmPass);
// myDiv.appendChild(myForm);

// inputPassword.setAttribute("type", "password");
// inputConfirmPass.setAttribute("type", "password");

// labelUsername.textContent = "username ";
// labelPassword.textContent = "password ";
// labelConfirmPass.textContent = "Confirm Password ";
// document.body.appendChild(myDiv);
// console.log(myDiv);

// 2
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("register-btn");
let id1 = document.getElementById("p1");
let id2 = document.getElementById("p2");
let id3 = document.getElementById("p3");

let arr = [usernameInput, passwordInput, confirmPasswordInput];
let arrId = [id1, id2, id3];
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("input", function () {
    if (arr[i].value != "") {
      arrId[i].style.display = "none";
    } else {
      arrId[i].style.display = "block";
    }
  });
}
//3
registerBtn.onclick = function () {
  if (passwordInput.value == confirmPasswordInput.value) {
    alert("successful");
  } else {
    alert("not successful");
  }
};

// 4
function validateInputs() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  return username !== "" && confirmPassword !== "" && password !== "";
}

function toggleRegisterBtn() {
  registerBtn.disabled = !validateInputs();
}

usernameInput.addEventListener("input", toggleRegisterBtn);
passwordInput.addEventListener("input", toggleRegisterBtn);
confirmPasswordInput.addEventListener("input", toggleRegisterBtn);
