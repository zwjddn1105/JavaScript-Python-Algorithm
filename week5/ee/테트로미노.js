const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./14500.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

dir = [
  [[0, 0, 0, 0], [0, 1, 2, 3], 1, 4],
  [[0, 1, 2, 3], [0, 0, 0, 0], 4, 1],

  [[0, 0, 1, 1], [0, 1, 0, 1], 2, 2],

  [[0, 1, 2, 2], [0, 0, 0, 1], 3, 2],
  [[1, 1, 1, 0], [0, 1, 2, 2], 2, 3],
  [[0, 0, 1, 2], [0, 1, 1, 1], 3, 2],
  [[0, 0, 0, 1], [0, 1, 2, 0], 2, 3],
  [[0, 1, 2, 2], [1, 1, 1, 0], 3, 2],
  [[0, 0, 0, 1], [0, 1, 2, 2], 2, 3],
  [[0, 0, 1, 2], [0, 1, 0, 0], 3, 2],
  [[0, 1, 1, 1], [0, 0, 1, 2], 2, 3],

  [[0, 1, 1, 2], [0, 0, 1, 1], 3, 2],
  [[1, 1, 0, 0], [0, 1, 1, 2], 2, 3],
  [[0, 1, 1, 2], [1, 1, 0, 0], 3, 2],
  [[0, 0, 1, 1], [0, 1, 1, 2], 2, 3],

  [[0, 0, 0, 1], [0, 1, 2, 1], 2, 3],
  [[0, 1, 1, 2], [0, 0, 1, 0], 3, 2],
  [[0, 1, 1, 2], [1, 0, 1, 1], 3, 2],
  [[0, 1, 1, 1], [1, 0, 1, 2], 2, 3],
]

let ans = 0;

function check(x, ans) {
  const di = dir[x][0]
  const dj = dir[x][1]

  const n = dir[x][2]
  const m = dir[x][3]

  for (let i = 0; i <= N - n; i++) {
    for (let j = 0; j <= M - m; j++) {
      let temp = 0;
      for (let k = 0; k < 4; k++) {
        temp += arr[i + di[k]][j + dj[k]]
      }
      ans = Math.max(ans, temp);
    }
  }
  return ans
}

for (let x = 0; x < dir.length; x++) {
  ans = check(x, ans)
}

console.log(ans)

