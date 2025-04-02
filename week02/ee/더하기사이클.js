const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const N = parseInt(fs.readFileSync(filePath).toString().trim());

let cycle = 0

let a = Math.floor(N / 10)
let b = N % 10

let prev = 0

while (true) {
  prev = b * 10 + (a + b) % 10

  a = Math.floor(prev / 10)
  b = prev % 10

  cycle ++;
  if (prev === N) break;
}

console.log(cycle)
