const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./7567.txt";

const input = fs.readFileSync(filePath).toString().trim();

// console.log(input); // ((((

let isFirst = true;
let answer = 10;

for (let i = 1; i < input.length; i++) {
  if (input[i] === input[i - 1]) {
    isFirst = false;
    answer += 5;
  } else {
    isFirst = true;
    answer += 10;
  }
}

console.log(answer);