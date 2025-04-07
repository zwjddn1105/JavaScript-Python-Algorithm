const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map(line => {
  const [W, V] = line.split(" ").map(Number);
  return { weight: W, value: V };
});

// 1차원 DP 배열 (공간 최적화)
const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const { weight, value } = items[i];

  // 뒤에서부터 순회해야 이전 값이 덮이지 않음
  for (let w = K; w >= weight; w--) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value);
  }
}

console.log(dp[K]);
