const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

let cnt = 0

// 완전탐색으로 배열의 첫 요소부터 뒤로 하나씩 더한 뒤, m과 같은 값이 나오면 cnt에 +1
for (let i = 0; i < n; i++) {
  let idx = i
  let sum = arr[i]
  while (sum < m && idx < n - 1) {
    idx += 1
    sum += arr[idx]
  }
  if (sum == m) {
    cnt += 1
  }
}

console.log(cnt)
