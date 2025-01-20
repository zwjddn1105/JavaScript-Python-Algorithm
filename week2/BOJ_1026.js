const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

arrA.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

arrB.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

let result = 0;

for (let i = 0; i <= n - 1; i++) {
  result += arrA[i] * arrB[i];
}

console.log(result);
