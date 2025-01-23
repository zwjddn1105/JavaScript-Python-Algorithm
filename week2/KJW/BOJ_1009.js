const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= Number(n); i++) {
  const a = Number(input[0]);
  const b = Number(input[1]);
  let arr = [];
  while (true) {
    let num = a * b;
    let len = String(a * b).length;
    let last_num = num % (10 * len);
    if (last_num in arr) {
      break;
    } else {
      arr.push(last_num);
    }
  }
}

let result = arr[(b % arr.length) - 1];
console.log(result);
