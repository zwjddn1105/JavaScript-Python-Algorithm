// 숫자의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./tc.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input); //[ '5\r', '54321' ]
// console.log(input[1].split('')) // [ '5', '4', '3', '2', '1' ]

let answer = 0;
for (num of input[1].split('')) {
  answer += Number(num);
}

console.log(answer);