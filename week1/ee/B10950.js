// A+B - 3

//입력 파일 전체 받아오기
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./tc.txt";

// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input) // [ '5\r', '1 1\r', '2 3\r', '3 4\r', '9 8\r', '5 2' ]

const [tc, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(tc) // 5
// console.log(arr) // [ '1 1\r', '2 3\r', '3 4\r', '9 8\r', '5 2' ]

for (let i=0; i<tc; i++) {
  let [A, B] = arr[i].split(" ");
  console.log(+A + +B);
}