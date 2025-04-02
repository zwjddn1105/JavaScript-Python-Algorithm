const fs = require("fs")
// 파일 시스템 모듈, 입력을 읽기 위해 사용

// 내 로컬환경에서 풀이는 아래와 같이 함
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// process.platform은 Node.js에서 제공하는 프로세스(process) 객체의 속성 중 하나로, 현재 실행 중인 운영 체제를 나타내는 문자열 값을 반환
// 예를들어 현재 Windows 면 "win32", macOS면 "darwin", Linux면 "linux"라는 문자열을 반환
// 백준에서 /dev/stdin을 사용해야 하는 것으로 봐서는 백준은 linux 환경인 듯 합니다.
// 내 로컬에서는 input.txt 파일을 만들어서 테스트 했음

const input = fs.readFileSync(filePath).toString().trim()
// console.log(input) // 1 2
// 입력을 읽어서 문자열로 변환하고, 양 끝 공백을 제거
// 입력값이 어떻게 들어오는지에 따라서 끝에 trim메서드를 다른 것으로 바꾸는 등의 작업이 필요할 듯 함

// /dev/stdin의 의미
// 유닉스 및 유닉스 계열 운영 체제에서 사용되는
// 표준 입력 스트림(Standard Input Stream)을 나타내는 특별한 파일 경로
// 이 경로는 프로그램이 입력 데이터를 받을 수 있는 가상의 파일로 작동
// 주로 키보드 입력이나 다른 프로그램의 출력을 받아들이는 데 사용됨 !

const result = input.split(" ").map(Number)
// console.log(result) // [1, 2]
const a = result[0]
const b = result[1]

console.log(a + b)
