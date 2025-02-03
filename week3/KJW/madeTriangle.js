const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

// 삼각형 만들 수 있는 조건
// 내가알기론 작은거 2개 합쳐서 큰거1개보다 크면 되는데
// a+b > c 이면 됨
let result = -1

input.sort((a, b) => {
  // 내림차순정렬
  return Number(b.trim()) - Number(a.trim())
})
const data = input.map(Number)
// let stop = false

// function Combinations(arr) {
//   const result = []
//   function backtracking(start, combination) {
//     if (combination.length === 3) {
//       if (stop) {
//         return
//       }
//       const [a, b, c] = combination
//       // 두 작은 수의 합이 가장 큰 수보다 클 때만 저장
//       if (b + c > a) {
//         // combination을 복사해서 넣어야 함
//         result.push([...combination])
//         stop = true
//       }
//       return
//     }
//     if (stop) {
//       return
//     }
//     for (let i = start; i < arr.length; i++) {
//       combination.push(arr[i])
//       backtracking(i + 1, combination)
//       combination.pop()
//     }
//   }

//   backtracking(0, [])
//   return result
// }

// const combinations = Combinations(data)

// if (combinations.length > 0) {
//   let answer = combinations[0].reduce((sum, num) => {
//     sum = sum + num
//     return sum
//   })
//   console.log(answer)
// } else {
//   console.log(-1)
// }

for (let i = 0; i < n - 2; i++) {
  if (data[i] < data[i + 1] + data[i + 2]) {
    result = data[i] + data[i + 1] + data[i + 2]
    break
  }
}

console.log(result)
