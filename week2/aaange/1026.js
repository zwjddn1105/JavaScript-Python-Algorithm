`
- 분류 : 수학, 그리디 알고리즘, 정렬
- 성능 요약
    - 메모리 : 9592 KB
    - 시간 : 96 ms
- 제출 일자 : 2025-01-22 17:52
`


const fs = require("fs"); 
// Node.js 환경에서 파일 시스템(File System) 모듈을 가져오는 코드
// fs : File System의 약자
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const list_A = input[1].split(" ").map(Number);
const list_B = input[2].split(" ").map(Number);

// 리스트A 오름차순 정렬
list_A.sort((a,b) => a - b);

// 리스트B 내림차순 정렬(인덱스, 값 쌍으로 정렬)
const table_B = list_B
    .map((value, index) => [index, value])
    .sort((a, b) => b[1] - a[1]);

// New_A 생성
const New_A = Array(N).fill(0);

for (let i = 0; i < N ; i ++) {
    New_A[table_B[i][0]] = list_A[i];
};

// 결과 계산
let result = 0;
for (let idx = 0; idx < N; idx++) {
    result += list_B[idx]*New_A[idx];
}

console.log(result);