const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

arr.sort((a, b) => b - a); // 내림차순 정렬 [15, 10]

let max = 0;

for (let i=0; i<N; i++) {
    const w = arr[i] * (i+1); // 15*1, 10*2
    max = Math.max(max, w)
}

console.log(max)