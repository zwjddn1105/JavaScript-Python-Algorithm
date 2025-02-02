// 삼각형을 만들기 위해서는 두 변의 길이의 합이 
// 나머지 한 변의 길이보다 커야 합니다.
// a, b, c => c < a + b

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

arr.sort((a, b) => b - a); // 내림차순 정렬

let ans = -1
for (let i=0; i<arr.length - 2; i++) {
    if (arr[i] < arr[i+1] + arr[i+2]) {
        ans = arr[i] + arr[i+1] + arr[i+2];
        break;
    }
} 

console.log(ans);