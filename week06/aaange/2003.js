`
- 분류 : 브루트포스 알고리즘, 누적 합, 두 포인터
- 성능 요약
    - 메모리 : 9776 KB
    - 시간 : 160 ms
- 제출 일자 : 2025-02-24 16:17
`

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);

let count = 0;
let t = false;

for (let i = 0; i <= N; i++) {
    if (t) break;

    let num = 0;
    let idx = 0;
    while (num < M) {
        if ((i + idx) >= N) {
            t = true;
            break
        }
        num += array[i + idx];
        if (num === M) {
            count ++
            break
        } else {
            idx ++
        }
    }
}

console.log(count)