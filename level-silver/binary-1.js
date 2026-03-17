// 수 찾기 [1920]

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const targets = input[3].split(" ").map(Number);
let result = [];

targets.forEach((target) => {
  let low = 0;
  let high = numbers.length - 1;
  let correct = false;

  while (low <= high) {
    let pivot = Math.floor((low + high) / 2);
    if (numbers[pivot] === target) {
      correct = true;
      break;
    } else if (numbers[pivot] < target) {
      low = pivot + 1;
    } else {
      high = pivot - 1;
    }
  }
  result.push(correct ? 1 : 0);
});
console.log(result.join("\n"));
