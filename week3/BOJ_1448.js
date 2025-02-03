// 백준 1448 - 삼각형 만들기
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 빨대의 개수
const N = parseInt(input[0])
// 각 빨대의 길이를 배열로 변환하고 내림차순 정렬
const straws = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a)

let result = -1

// 가장 긴 세 개의 빨대로 삼각형이 만들어지는지 확인
// 삼각형 조건: 가장 긴 변의 길이 < 다른 두 변의 길이의 합
for (let i = 0; i < N - 2; i++) {
  // 현재 위치의 빨대와 그 다음 두 개의 빨대로 삼각형을 만들 수 있는지 확인
  if (straws[i] < straws[i + 1] + straws[i + 2]) {
    // 삼각형이 만들어진다면 세 변의 합을 결과로 저장
    result = straws[i] + straws[i + 1] + straws[i + 2]
    break
  }
}

// 결과 출력
console.log(result)
