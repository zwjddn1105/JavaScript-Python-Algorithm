// 프리티어 때문에 세미콜론 붙여서 자동저장됨 ㅠㅠ
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const tc = Number(input[0]);
// console.log(tc);

for (let i = 1; i <= tc; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}
