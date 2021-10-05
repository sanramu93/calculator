"use strict";

///////////////////
// ELEMENTS
const prevResultElm = document.querySelector(".result");
const userInputElm = document.querySelector(".user-input");
const numElms = document.querySelectorAll(".btn-num");

const clearElm = document.querySelector(".btn-clear");

const equalElm = document.querySelector(".btn-equal");

///////////////////
// FUNCTIONALITY

let expr = "";
let prevResult = "";

const checkIfNum = function (value) {
  return !isNaN(+value) || value === "." ? true : false;
};

const press = function (value) {
  expr += value;
  userInputElm.value = expr;
};

const evaluate = function () {
  try {
    checkIfNum(expr[0]) ? (prevResult = "") : prevResult;
    const newExpr = [prevResult, expr].join("");
    const result = eval(newExpr);
    userInputElm.value = result;
    prevResult = result;
    prevResultElm.textContent = prevResult;
    expr = "";
  } catch {
    clear();
  }
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

///////////////////
// KEY EVENTS

document.addEventListener("keydown", (e) => {
  if (
    e.key >= 0 ||
    e.key <= 9 ||
    e.key === "." ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    press(e.key);
  }

  if (e.key === "Enter" || e.key === "=") evaluate();

  if (e.key === "Backspace" || e.key === "Delete") clear();
});
