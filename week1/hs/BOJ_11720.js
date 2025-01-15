// 입력 받기
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const arr = input[1]

// for of 사용
let result = 0

for (const num of arr) {
  result += parseInt(num)
}

console.log(result)
