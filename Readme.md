# JavaScript + Python Algorithm Study(★자스알스★)

## 목표: SSAFY 2학기 취업 목표 프론트엔드 코딩테스트 대비(2025.01.13 ~)

## 기간: 취업 때 까지 매일매일

## 교재: 백준, 프로그래머스 등 알고리즘 추천문제 + 이코테(저자 나동빈)

## 진행방식

- 풀이한 문제 github에 코드 제출
- 셀프로 merge 하기
- 각자 정해진 페어의 풀이를 방식 or 클린코드 뭐든 좋으니 리뷰 써주기
- 딱히 리뷰사항이 없다면 쓰지 않아도 됨

## 모임주기

- 1주일에 1번, 온라인 Discord 모임, 음성필수 (30분 ~ 1시간 내)
- 요일 미정

## 특이사항

- 자격증이나 프로젝트 등으로 본인 개인 일정이 매우매우 바쁠 때에는 모임 스킵가능

## 규칙

- 평일 매일 1문제 풀이를 목표, 개인사정 상 몰아서 문제풀이도 가능, 주말 등 이용가능 (3일은 넘기지 말기!)
- 단순 문제를 많이 풀기보단 한 문제를 풀더라도 제대로 깔끔히 풀기
- 몰라서 못 푼 문제 부끄러워 하지 말기
- 혼자서의 힘으로 풀이를 못하겠다면 생성형AI 적극활용 + 스터디원들에게 힌트 물어보기
- 단, 답지 or AI등으로 풀이를 봤다면 이해하고 백지에 다시 혼자 풀기
- 한 문제를 JS와 Python 두개의 언어로 모두 푸는게 바람직 (필수는 아님)
- 언제든지 추가 규칙 제안 받아요 ~~!

### 자바스크립트 입력 기본구조

```js
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on("line", (line) => {
  input.push(line)
}).on("close", () => {
  // input 처리 및 알고리즘 로직 작성
  console.log(input) // 입력값 확인
  process.exit()
})
```
