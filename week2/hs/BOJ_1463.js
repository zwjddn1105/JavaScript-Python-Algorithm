// 1로 만들기

const fs = require("fs")
const input = Number(fs.readFileSync("input.txt").toString().trim())

// dp 배열 생성하기기
const dp = new Array(input + 1).fill(0)

// for 문으로 input 숫자까지의 모든 최소 연산 수 저장
for (let i = 2; i <= input; i++) {
  // 1을 빼는 연산을 수행하는 경우
  // 이전 숫자의 최소 연산 수 + 1
  dp[i] = dp[i - 1] + 1

  // i 가 2로 나누어 떨어지는 경우
  if (i % 2 === 0) {
    // 기존 dp[i] 값, 2로 나눈 수의 최소 연산 수 (dp[i / 2]) + 1 (현재 연산)
    dp[i] = Math.min(dp[i], dp[i / 2] + 1)
  }

  // i 가 3으로 나누어 떨어지는 경우
  if (i % 3 === 0) {
    // 기존 dp[i] 값, 3으로 나눈 수의 최소 연산 수 (dp[i / 3]) + 1 (현재 연산)
    dp[i] = Math.min(dp[i], dp[i / 3] + 1)
  }
}

console.log(dp[input])
