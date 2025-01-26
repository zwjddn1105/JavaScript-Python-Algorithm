// 보물

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문자열 -> 숫자 배열
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b) // 오름차순 정렬
B.sort((a, b) => b - a) // 내림차순 정렬

let answer = 0
for (let i = 0; i < input[0]; i++) {
  answer += A[i] * B[i]
}

console.log(answer)