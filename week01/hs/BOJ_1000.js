const fs = require("fs")
// 방법 1. 입력값을 input.txt 로 저장하여 테스트
// 방법 2. const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ") -> 백준 등 프로그램에서 입력 받을 때
const input = fs.readFileSync("input.txt").toString().trim().split(" ")

// Number로 타입을 지정하지 않으면 문자열의 형태로 더해진다
console.log(Number(input[0]) + Number(input[1]))
