const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let X = parseInt(fs.readFileSync(filePath).toString().split());

// DP
// dp[1] = 0
// dp[2] = 1
// dp[3] = 1

let dp = new Array(10 ^ 6 + 1).fill(0);
dp[2] = 1;
dp[3] = 1;

if (X > 3) {
  for (let i = 4; i < X + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 3 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 == 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
  }
}

console.log(dp[X])