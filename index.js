const inputBoxEl = document.getElementById("pass-input");
const toggleBtn = document.querySelector(".eye-btn");

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

toggleBtn.addEventListener("click", function () {
  if (inputBoxEl.getAttribute("type") === "password") {
    inputBoxEl.setAttribute("type", "text");
    toggleBtn.classList.toggle("hide");
  } else {
    inputBoxEl.setAttribute("type", "password");
    toggleBtn.classList.toggle("hide");
  }
});

const validator = function (value) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  if (lower.test(value)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }
  //Upper Case Validation
  if (upper.test(value)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  //Number Validation
  if (number.test(value)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }
  //Special Charater Validation
  if (special.test(value)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
  //Password Minimum Length Validation
  if (length.test(value)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
};
