const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const lst = input[0].split(" ").map(Number);
const data = input[0].split(" ").map(Number);
data.sort((a, b) => {
  return a - b;
});

for (let i = 0; i < Number(n); i++) {
  let ans = 0;
  let left = 0;
  let right = data.length - 1;
  let idx = -1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (data[mid] === lst[i]) {
      idx = mid;
      break;
    } else if (data[mid] < lst[i]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  while (true) {
    if (idx === 0) {
      break;
    }
    if (data[idx] === data[idx - 1]) {
      idx -= 1;
    } else {
      break;
    }
  }
  // console.log(idx);
  // const copied = data.slice(0, idx)
  const mySet = new Set(data.slice(0, idx));
  ans = mySet.size;
  process.stdout.write(ans + " ");
}
