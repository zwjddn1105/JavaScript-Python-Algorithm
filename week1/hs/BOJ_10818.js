// 입력 받기
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 입력 받을 때 특이사항 !!!! **
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
// 위 주석과 같은 방식으로 받으면 NaN 가 출력됨

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

// 숫자 배열 오름차순 정렬
arr.sort((a, b) => a - b)
const min = arr[0]
const max = arr[arr.length - 1]

// 숫자 배열 내림차순 정렬
// arr.sort((a, b) => b - a);

// 다른 방식
// Math.min 이건 배열에 적용되지 않음, 숫자 인수의 나열 값을 받음
// -> 스프레드 연산자로 적용하기
// const min = Math.min(...arr);
// const max = Math.max(...arr);

console.log(min, max)
