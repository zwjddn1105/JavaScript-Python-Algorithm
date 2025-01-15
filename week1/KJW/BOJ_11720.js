const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const n = Number(input[0]);
const num = input[1];
// console.log(num);
// console.log(num[0]);

let result = 0;

for (let i = 0; i <= n - 1; i++) {
  result += Number(num[i]);
}

console.log(result);
