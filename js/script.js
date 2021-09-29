"use strict";
const resultElm = document.querySelector(".result");
const userInputElm = document.querySelector(".user-input");
const numElms = document.querySelectorAll(".btn-num");

const clearElm = document.querySelector(".btn-clear");

const equalElm = document.querySelector(".btn-equal");

// OPERATIONS

// const sInput = "++++++++";
// const sOutput = sInput.replace(/(.)\1{1,}/g, "$1");
// console.log(sOutput);

let inputValues = [];
let prevResult = 0;
let currentResult = 0;

const isOperator = function (value) {
  if (value === ".") return false;
  return Number.isNaN(+value) ? true : false;
};

const press = function (btn) {
  let value = btn.textContent;
  inputValues.push(value);
  const expr = inputValues.join("");
  userInputElm.value = expr;
};

const clear = function () {
  inputValues = [];
  userInputElm.value = "";
  resultElm.textContent = 0;
  prevResult = 0;
};

const evaluate = function () {
  const expr = inputValues.join("");
  const result = eval(expr);
  userInputElm.value = result;
  prevResult = result;
  resultElm.textContent = prevResult;
  inputValues = [];
};

const usePrevResult = function () {
  // Check if value is operator in order to continue calculation
  if (prevResult !== 0) {
    inputValues.unshift(prevResult);
  }

  if (!isOperator(inputValues[1])) {
    inputValues.shift();
  }
  console.log(inputValues);
};

// Event listeners
numElms.forEach((el) => {
  el.addEventListener("click", () => press(el));
});

clearElm.addEventListener("click", () => clear());

equalElm.addEventListener("click", () => {
  usePrevResult();
  evaluate();
});
