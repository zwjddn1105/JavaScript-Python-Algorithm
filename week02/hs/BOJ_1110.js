// 더하기 사이클 - 자바스크립트

const fs = require("fs")
const input = Number(fs.readFileSync("/dev/stdin").toString().trim())

function addCycle(n) {
  let num = n
  let cnt = 0

  while (true) {
    // sum: 현재 숫자의 각 자릿수를 더한 값
    // Math.floor(num / 10): 십의 자리 숫자 구하기
    // (num % 10): 일의 자리 숫자 구하기
    let sum = Math.floor(num / 10) + (num % 10)

    // 새로운 숫자 생성
    // (num % 10) * 10: 기존 일의 자리를 십의 자리로 이동
    // (sum % 10): 자릿수 합의 일의 자리를 새로운 일의 자리로 사용
    num = (num % 10) * 10 + (sum % 10)

    // 사이클 횟수 증가
    cnt++

    // 새로 만든 숫자가 원래 숫자와 같아지면 반복 종료
    if (num === n) break
  }

  // 총 사이클 횟수 반환
  return cnt
}

console.log(addCycle(input))
