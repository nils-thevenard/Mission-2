const container = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const userInput1 = document.getElementById("user-input1");
const userInput2 = document.getElementById("user-input2");
const sumResult = document.getElementById("sum-result");
const sumBtn = document.getElementById("sum-btn");
const timesBtn = document.getElementById("times-btn");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark");
});

sumBtn.addEventListener("click", function () {
  sumResult.textContent =
    "Result: " +
    userInput1.value +
    " + " +
    userInput2.value +
    " = " +
    (Number(userInput1.value) + Number(userInput2.value));
});
timesBtn.addEventListener("click", function () {
  sumResult.textContent =
    "Result: " +
    userInput1.value +
    " x " +
    userInput2.value +
    " = " +
    Number(userInput1.value) * Number(userInput2.value);
});
