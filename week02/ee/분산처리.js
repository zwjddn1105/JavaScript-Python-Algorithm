const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= parseInt(input[0]); i++) {
  // console.log(input[i])
  let [a, b] = input[i].split(' ').map(Number);

  // 큰 수 처리를 해 주어야 함..
  // console.log(a ** b % 10) // 1 7 6 4 Nan

  // 시간초과
  // const ans = BigInt(a) ** BigInt(b) % 10n;
  // console.log(ans === 0n ? 10 : Number(ans));

  let ans = 1
  for (let j = 0; j < b; j++) {
    ans = ans * a % 10; // 매 계산마다 나머지만 저장해서 큰 수 계산 x
  }
  console.log(ans == 0 ? 10 : ans)
}