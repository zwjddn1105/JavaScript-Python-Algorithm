// 입력
const fs = require("fs")
// const input = fs.readFileSync("input.txt").toString().trim().split("\n")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const n = parseInt(input[0])
const arr = input.slice(1)

// forEach 사용
arr.forEach((line) => {
  const [a, b] = line.split(" ").map(Number)
  console.log(a + b)
})

// for 사용
// for (let i = 0; i < arr.length; i++) {
//   const [a, b] = arr[i].split(" ").map(Number)
//   console.log(a + b)
// }

// for of 사용
// for (const line of arr) {
//   const [a, b] = line.split(" ").map(Number)
//   console.log(a + b)
// }
