// 최소, 최대

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./tc.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
console.log(Math.min(...arr), Math.max(...arr));