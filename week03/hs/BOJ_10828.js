// 백준 10828 - 스택
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 명령어 개수
const N = parseInt(input[0])
// 스택 배열 초기화
const stack = []
// 결과를 저장할 배열
const result = []

// 각 명령어 처리
for (let i = 1; i <= N; i++) {
  const command = input[i].trim().split(" ")

  switch (command[0]) {
    case "push":
      // 정수 X를 스택에 넣기
      stack.push(parseInt(command[1]))
      break

    case "pop":
      // 스택에서 가장 위에 있는 정수를 빼고 출력
      // 스택이 비어있으면 -1 출력
      result.push(stack.length === 0 ? -1 : stack.pop())
      break

    case "size":
      // 스택에 들어있는 정수의 개수 출력
      result.push(stack.length)
      break

    case "empty":
      // 스택이 비어있으면 1, 아니면 0 출력
      result.push(stack.length === 0 ? 1 : 0)
      break

    case "top":
      // 스택의 가장 위에 있는 정수 출력
      // 스택이 비어있으면 -1 출력
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1])
      break
  }
}

// 결과 출력
console.log(result.join("\n"))
