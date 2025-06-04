# 자스알스

#### ***JavaScript + Python Algorithm Study***

### 🎯 목표
프론트엔드 취업 대비 코딩 테스트 준비

### 🗓 기간
2025.01.13 ~ 2025.06.04


## 👥 팀원

<table>
<tr>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175976497?v=4' alt='김정우' width="100"><br><strong>김정우👑</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175283788?v=4' alt='이다이' width="100"><br><strong>이다이</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175369230?v=4' alt='김희수' width="100"><br><strong>김희수</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/128114236?v=4' alt='이아영' width="100"><br><strong>이아영</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/148981647?v=4' alt='김민지' width="100"><br><strong>김민지</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175284278?v=4' alt='여현승' width="100"><br><strong>여현승</strong>
</tr>
</table>

## ✅ 진행방식

- 문제 풀이 후 GitHub에 코드 업로드
- 셀프 merge 방식
- 정해진 페어의 코드에 대해 리뷰 작성 (방식은 자유: 접근 방식, 클린코드, 개선 포인트 등)
- 리뷰할 내용이 없으면 생략 가능

## 📅 모임주기

- 주 1회, 온라인 Discord 모임
- 월요일 저녁, 음성 참여 필수
- 시간은 유동적 (30분 ~ 1시간 내외)

## 📌 규칙

- 평일 매일 1문제 풀이를 목표, 개인사정 상 몰아서 문제풀이도 가능, 주말 등 이용가능 (3일은 넘기지 말기!)
- 단순 문제를 많이 풀기보단 한 문제를 풀더라도 제대로 깔끔히 풀기
- 몰라서 못 푼 문제 부끄러워 하지 말기
- 혼자서의 힘으로 풀이를 못하겠다면 생성형AI 적극활용 + 스터디원들에게 힌트 물어보기
- 단, 답지 or AI등으로 풀이를 봤다면 이해하고 백지에 다시 혼자 풀기
- 한 문제를 JS와 Python 두개의 언어로 모두 푸는게 바람직 (필수는 아님)

## 📖 자바스크립트 입력 기본구조

```js
// 1. 하나의 값을 입력받을 때
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim()

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")

// 3. 여러 줄의 값들을 입력받을 때
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require("fs")
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/)

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const fs = require("fs")
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/)
const n = input[0]
const n_arr = input.slice(1, n + 1)
const [m, ...m_arr] = input.slice(n + 1)
```
