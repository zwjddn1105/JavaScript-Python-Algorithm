const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (n === 1) {
  console.log(9);
} else {
  // 길이가 1인 경우를 미리 처리 -> 각 1~9까지 9개
  let count = new Array(10).fill(1);
  count[0] = 0;

  // 길이가 2인 경우부터 n의 경우까지 계단수가 가능한 경우를 더해주며 계산
  for (let len = 2; len <= n; len++) {
    // next -> 다음 계단수 경우의 수를 저장할 빈 배열
    const next = new Array(10).fill(0);

    // 각 자리별로 바로 옆 숫자에서만 올 수 있는 계단수를 더해줌
    for (let i = 0; i < 10; i++) {
      // i -> 1 ~ 9 일 경우
      if (i > 0) {
        next[i] = (next[i] + count[i - 1]) % 1000000000;
      }
      // i -> 0 ~ 8일 경우
      if (i < 9) {
        next[i] = (next[i] + count[i + 1]) % 1000000000;
      }
    }

    // 현재 count 상태 갱신
    count = next;
  }

  const result = count.reduce((sum, now) => (sum + now) % 1000000000, 0);
  console.log(result);
}
