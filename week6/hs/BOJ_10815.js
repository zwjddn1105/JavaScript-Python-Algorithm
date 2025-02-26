const fs = require("fs")
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/)

// 시간초과 방지 위해 has 쓰기 위해 Set 사용 -> 비교 기준이 되는 n_arr 배열만 Set으로 변환
const n = parseInt(input[0], 10)
const n_arr = new Set(input.slice(1, n + 1).map(Number))
const m = parseInt(input[n + 1], 10)
const m_arr = input.slice(n + 2).map(Number)

// 결과 넣을 배열
const result = []

// 하나씩 비교해서 빈 배열에 1 혹은 0 푸쉬
for (let num of m_arr) {
  if (n_arr.has(num)) {
    result.push(1)
  } else {
    result.push(0)
  }
}

console.log(result.join(" "))
