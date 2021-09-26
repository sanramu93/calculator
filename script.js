"use strict";
const userInputElm = document.querySelector(".user-input");

const oneElm = document.querySelector(".btn-1");
const twoElm = document.querySelector(".btn-2");
const threeElm = document.querySelector(".btn-3");
const fourElm = document.querySelector(".btn-4");
const fiveElm = document.querySelector(".btn-5");
const sixElm = document.querySelector(".btn-6");
const sevenElm = document.querySelector(".btn-7");
const eightElm = document.querySelector(".btn-8");
const nineElm = document.querySelector(".btn-9");
const zeroElm = document.querySelector(".btn-0");

const plusElm = document.querySelector(".btn-plus");
const minusElm = document.querySelector(".btn-minus");
const multElm = document.querySelector(".btn-mult");
const divElm = document.querySelector(".btn-div");

const dotElm = document.querySelector(".btn-dot");
const clearElm = document.querySelector(".btn-clear");

const equalElm = document.querySelector(".btn-equal");

// OPERATIONS
let inputValues = [];
let currentResult = 0;

const press = function (btn) {
  inputValues.push(btn.textContent);
  const expr = inputValues.join("");
  userInputElm.value = expr;
};

const clear = function () {
  inputValues = [];
  userInputElm.value = "";
};

const evaluate = function () {
  const expr = inputValues.join("");
  const result = eval(expr);
  userInputElm.value = result;
  inputValues = [];
};

oneElm.addEventListener("click", () => press(oneElm));
twoElm.addEventListener("click", () => press(twoElm));
threeElm.addEventListener("click", () => press(threeElm));
fourElm.addEventListener("click", () => press(fourElm));
fiveElm.addEventListener("click", () => press(fiveElm));
sixElm.addEventListener("click", () => press(sixElm));
sevenElm.addEventListener("click", () => press(sevenElm));
eightElm.addEventListener("click", () => press(eightElm));
nineElm.addEventListener("click", () => press(nineElm));
zeroElm.addEventListener("click", () => press(zeroElm));

plusElm.addEventListener("click", () => press(plusElm));
minusElm.addEventListener("click", () => press(minusElm));
multElm.addEventListener("click", () => press(multElm));
divElm.addEventListener("click", () => press(divElm));

dotElm.addEventListener("click", () => press(dotElm));
clearElm.addEventListener("click", () => clear());

equalElm.addEventListener("click", () => evaluate());
