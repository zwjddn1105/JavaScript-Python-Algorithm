const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const data = input[1].split(" ").map(Number);

const sorted = [...new Set(data)].sort((a, b) => {
  return a - b;
});
const sortedObj = {};

for (let i = 0; i < sorted.length; i++) {
  sortedObj[sorted[i]] = i;
}

let answer = "";
for (let i = 0; i < n; i++) {
  answer += sortedObj[data[i]] + " ";
}
console.log(answer);
