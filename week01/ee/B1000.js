//입력 파일 전체 받아오기
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./tc.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(+input[0] + +input[1]);