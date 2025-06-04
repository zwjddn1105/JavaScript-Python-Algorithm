const fs = require("fs");
const input = fs.readFileSync("./week12/ehowlqk/boj10844.txt").toString();

// 해당 인덱스(0~9)가 계단수의 마지막 자리에 등장하는 경우의 수
let arr = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const n = parseInt(input);

for (let i = 1; i < n; i++) {
  var newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let j = 0; j < 10; j++) {
    // 하강(0 제외)
    if (j > 0) {
      newArr[j - 1] = (newArr[j - 1] + arr[j]) % 1000000000;
    }

    // 상승(9 제외)
    if (j < 9) {
      newArr[j + 1] = (newArr[j + 1] + arr[j]) % 1000000000;
    }
  }
  // 경우의 수 갱신
  arr = newArr;
}

let sum = 0;

arr.forEach((v) => (sum += v)); // 경우의 수 합산
console.log(sum % 1000000000);
