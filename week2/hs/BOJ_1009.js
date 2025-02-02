// 분산처리
// 시간초과로 거듭제곱 주기 사용 .. ?

const fs = require("fs")
const [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n")

for (let i = 0; i < n; i++) {
  let [a, b] = arr[i].split(" ").map(Number)

  a = a % 10 // 일의 자리 숫자만 고려
  if (a === 0) {
    // 10의 배수면, 무조건 10이 출력됨
    console.log(10)
    continue
  }

  // 각 숫자의 거듭제곱 주기 (일의 자리 반복)
  const cycle = {
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
  }

  const sequence = cycle[a] // a의 주기 배열 가져오기
  const index = (b - 1) % sequence.length // 주기 내 위치 찾기
  console.log(sequence[index]) // 정답 출력
}
