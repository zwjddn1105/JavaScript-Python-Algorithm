const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let number = fs.readFileSync(filePath).toString().trim();
number = Number(number);
let now_number = number;
let cycle = 0;

while (true) {
  let last_num = now_number % 10;
  let first_num = Math.floor(now_number / 10);
  let sum = first_num + last_num;
  cycle += 1;
  if (sum >= 10) {
    sum %= 10;
  }
  let new_num = last_num * 10 + sum;
  if (new_num === number) {
    break;
  } else {
    now_number = new_num;
  }
}

console.log(cycle);
