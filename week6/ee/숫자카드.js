const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10815.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const nums = input[3].split(" ").map(Number);

cards.sort((a, b) => a - b);

function binary_search(num, cards, N) {
  let start = 0;
  let end = N - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (num === cards[mid]) {
      return 1
    } else if (num > cards[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return 0
}

let answer = []
for (let num of nums) {
  answer.push(binary_search(num, cards, N))
}

console.log(answer.join(" "))