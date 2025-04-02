// 농구경기

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log("a".charCodeAt(0)) // 97

let cntArr = Array.from({ length: 26 }, () => 0)
for (let i = 0; i < N; i++) {
  cntArr[arr[i][0].charCodeAt(0) - 97] += 1
}

let answer = [];
for (let k = 0; k < 26; k++) {
  if (cntArr[k] >= 5) answer.push(String.fromCharCode(k + 97));
}

console.log(answer.length ? answer.sort().join("") : "PREDAJA")