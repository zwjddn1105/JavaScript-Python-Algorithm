// 단어의 개수

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./tc.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

// 공백만 입력했을 때 배열에 [' ']이 저장되길래 
// 배열의 첫 번째 요소가 공백(" ")이면 단어의 개수를 0개라고 봄

if (input[0]) { 
  console.log(input.length);
} else {
  console.log(0)
}

