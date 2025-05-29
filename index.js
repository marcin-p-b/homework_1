"use strict";
const prompt = require("prompt-sync")();

String.prototype.plus = (str2) => {
  let i = str1.length - 1;
  let j = str2.length - 1;

  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(str1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(str2[j]) : 0;

    const sum = digit1 + digit2 + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
};

String.prototype.minus = (str2) => {
  let str = "";

  let n1 = str1.length,
    n2 = str2.length;
  let diff = n1 - n2;

  let carry = 0;

  for (let i = n2 - 1; i >= 0; i--) {
    let sub =
      str1[i + diff].charCodeAt() -
      "0".charCodeAt() -
      (str2[i].charCodeAt() - "0".charCodeAt()) -
      carry;
    if (sub < 0) {
      sub = sub + 10;
      carry = 1;
    } else carry = 0;

    str += sub.toString();
  }

  for (let i = n1 - n2 - 1; i >= 0; i--) {
    if (str1[i] == "0" && carry > 0) {
      str += "9";
      continue;
    }
    let sub = str1[i].charCodeAt() - "0".charCodeAt() - carry;
    if (i > 0 || sub > 0) str += sub.toString();
    carry = 0;
  }

  let aa = str.split("");
  aa.reverse();
  return aa.join("");
};

String.prototype.divide = (str2) => {
  {
    let ans = "";

    let idx = 0;
    let temp = str1[idx] - "0";
    while (temp < str2) {
      temp = temp * 10 + str1[idx + 1].charCodeAt(0) - "0".charCodeAt(0);
      idx += 1;
    }
    idx += 1;

    while (str1.length > idx) {
      ans += String.fromCharCode(Math.floor(temp / str2) + "0".charCodeAt(0));

      temp = (temp % str2) * 10 + str1[idx].charCodeAt(0) - "0".charCodeAt(0);
      idx += 1;
    }

    ans += String.fromCharCode(Math.floor(temp / str2) + "0".charCodeAt(0));

    if (ans.length == 0) return "0";
    return ans;
  }
};

String.prototype.multiply = (str2) => {
  let n1 = str1.length,
    n2 = str2.length;
  if (n1 === 0 || n2 === 0) return "0";

  let result = new Array(n1 + n2).fill(0);

  let i1 = 0;

  let i2 = 0;

  // go from right to left by str1
  for (let i = n1 - 1; i >= 0; i--) {
    if (str1[i] === "-") continue;
    let carry = 0;
    let n1Digit = parseInt(str1[i]);
    i2 = 0;

    // go from right to left by str2
    for (let j = n2 - 1; j >= 0; j--) {
      if (str2[j] === "-") continue;
      let n2Digit = parseInt(str2[j]);

      let sum = n1Digit * n2Digit + result[i1 + i2] + carry;

      carry = Math.floor(sum / 10);

      result[i1 + i2] = sum % 10;

      i2++;
    }

    if (carry > 0) result[i1 + i2] += carry;

    i1++;
  }
  let i = result.length - 1;
  while (i >= 0 && result[i] === 0) i--;

  if (i === -1) return "0";

  let s = "";
  while (i >= 0) s += result[i--].toString();

  return s;
};

// const str1 = prompt("input an integer: ");
// const str2 = prompt("input second integer: ");
const str1 = "250";
const str2 = "51";

console.log(`${str1} + ${str2} = ${str1.plus(str2)}`);
console.log(`${str1} - ${str2} = ${str1.minus(str2)}`);
console.log(`${str1} / ${str2} = ${str1.divide(str2)}`);
console.log(`${str1} * ${str2} = ${str1.multiply(str2)}`);
