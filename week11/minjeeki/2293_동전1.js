const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./2293.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 다음주에 다시~~~