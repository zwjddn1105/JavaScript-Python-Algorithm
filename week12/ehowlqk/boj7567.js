const fs = require("fs");

const input = fs
  .readFileSync("./week12/ehowlqk/boj7567.txt")
  .toString()
  .trim()
  .split("");

// 초기화(그릇 1개)
let prev = input[0];
let height = 10;

for (let i = 1; i < input.length; i++) {
  // 다른 방향이면 +10, 이전 그릇 방향 갱신
  if (prev !== input[i]) {
    height += 10;
    prev = input[i];
  } else {
    // 같은 방향이면 +5
    height += 5;
  }
}

console.log(height);
