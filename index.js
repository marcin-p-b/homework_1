"use strict";
const prompt = require("prompt-sync")();

String.prototype.plus = (arg) => {
  let result = 0;
  result += +str + +arg;
  return result.toString();
};

String.prototype.minus = (arg) => {
  let result = 0;
  result = +str - +arg;
  return result.toString();
};

String.prototype.divide = (arg) => {
  let result = 0;
  result = +str * +arg;
  return result.toString();
};

String.prototype.multiply = (arg) => {
  let result = 0;
  result = +str / +arg;
  return result.toString();
};

const str = prompt("input an integer: ");
const str2 = prompt("input second integer: ");

console.log(`${str} + ${str2} = ${str.plus(str2)}`);
console.log(`${str} - ${str2} = ${str.minus(str2)}`);
console.log(`${str} * ${str2} = ${str.divide(str2)}`);
console.log(`${str} / ${str2} = ${str.multiply(str2)}`);
