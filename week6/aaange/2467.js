`
- 분류 : 이분 탐색, 투 포인터
- 성능 요약
    - 메모리 : 26500 KB
    - 시간 : 200 ms
- 제출 일자 : 2025-02-24 17:28
`

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = N - 1;
let min_value = Infinity;
let result = [];

while (left < right) {
    let mix = arr[left] + arr[right]
    if (Math.abs(mix) < min_value ) {
        min_value = Math.abs(mix)
        result = [arr[left], arr[right]]
    }

    if (mix > 0) {
        right--;
    } else {
        left++;
    }
}

console.log(result[0], result[1]);