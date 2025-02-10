// 백준 2217 - 로프
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 로프의 개수
const N = parseInt(input[0])
// 각 로프가 버틸 수 있는 중량을 배열로 변환
const ropes = input.slice(1).map(Number)

// 로프를 내림차순으로 정렬
ropes.sort((a, b) => b - a)

let maxWeight = 0

// 각 로프를 사용할 때의 최대 중량 계산
// i번째 로프를 사용한다는 것은 i번째까지의 모든 로프를 사용한다는 의미
// 이때 들 수 있는 최대 중량은 (현재 로프의 중량 * 사용하는 로프의 개수)
for (let i = 0; i < N; i++) {
  const currentWeight = ropes[i] * (i + 1)
  maxWeight = Math.max(maxWeight, currentWeight)
}

// 결과 출력
console.log(maxWeight)
