const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input[0].split(" ").map(Number);
const sushi = [];

for (let i = 0; i < n; i++) {
  sushi.push(Number(input[i + 1]));
}

// d는 왜준거지? ㅇ_ㅇ

let result = 0;
for (let i = 0; i < sushi.length; i++) {
  let food = new Set();
  food.add(c);
  for (let j = 0; j < k; j++) {
    food.add(sushi[(i + j) % sushi.length]);
  }

  result = Math.max(food.size, result);
}

console.log(result);
