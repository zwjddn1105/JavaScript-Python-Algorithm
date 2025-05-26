const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10844.txt";

const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const MOD = 1000000000;

const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j == 0) {
      dp[i][j] = dp[i - 1][1] % MOD; // 계산마다 나눠준다
    } else if (j == 9) {
      dp[i][j] = dp[i - 1][8] % MOD; // 계산마다 나눠준다
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD; // 계산마다 나눠준다
    }
  }
}

const answer = dp[N].reduce((acc, cur) => (acc + cur) % MOD, 0);
console.log(answer);
