// 입력 받기
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/)
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

// 공백만 입력되는 경우, 빈 문자열이 입력되는 경우 모두 0이 출력되도록 조건 생성
if (input.length === 1 && input[0] === "") {
  console.log("0")
} else {
  console.log(input.length)
}
