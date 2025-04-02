const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2003.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N, M] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

let cnt = 0
let cur_sum = 0

let end = 0
for (let start = 0; start < N; start++) {
  while (cur_sum < M && end < N) {
    cur_sum += arr[end]
    end++
  }

  if (cur_sum == M) {
    cnt++
  }

  cur_sum -= arr[start]
}

console.log(cnt)