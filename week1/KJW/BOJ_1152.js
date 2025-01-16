const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// 빈 문자열이 들어올 때 고려
const words = input === "" ? [] : input.split(" ");

console.log(words.length);
