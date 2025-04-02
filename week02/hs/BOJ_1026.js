const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 줄바꿈 기준으로 각각 n, arr1, arr2 구분
const n = parseInt(input[0])
const arr1 = input[1].split(" ").map(Number)
const arr2 = input[2].split(" ").map(Number)

// 최솟값 찾아야 함 -> arr1 : 오름차순 / arr2 : 내림차순 정렬 후 각각 같은 인덱스끼리 곱하면 최솟값 도출
arr1.sort((a, b) => a - b)
arr2.sort((a, b) => b - a)

// numSum 이라는 변수 만들어서 인덱스만큼 반복하여 각각 같은 인덱스의 수를 곱한 후 더해주기
let numSum = 0
for (let i = 0; i < arr1.length; i++) {
  numSum += arr1[i] * arr2[i]
}

console.log(numSum)