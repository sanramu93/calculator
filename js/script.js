"use strict";
const prevResultElm = document.querySelector(".result");
const userInputElm = document.querySelector(".user-input");
const numElms = document.querySelectorAll(".btn-num");

const clearElm = document.querySelector(".btn-clear");

const equalElm = document.querySelector(".btn-equal");

// FUNCTIONALITY

let expr = "";
let prevResult = "";

const isOperator = function (value) {
  return !isNaN(+value) || value === "." ? false : true;
};

const press = function (value) {
  expr += value;
  userInputElm.value = expr;
};

const evaluate = function () {
  const newExpr = [prevResult, expr].join("");
  const result = eval(newExpr);
  userInputElm.value = result;
  prevResult = result;
  prevResultElm.textContent = prevResult;
  expr = "";
};

const clear = function () {
  expr = "";
  prevResult = "";
  userInputElm.value = "";
  prevResultElm.textContent = 0;
};

///////////////////
// EVENT LISTENERS
numElms.forEach((el) =>
  el.addEventListener("click", () => press(el.textContent))
);

equalElm.addEventListener("click", evaluate);

clearElm.addEventListener("click", clear);
