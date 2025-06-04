# 자스알스

#### ***JavaScript + Python Algorithm Study***

### 🎯 목표
프론트엔드 취업 대비 코딩 테스트 준비

### 🗓 기간
2025.01.13 ~ ing


## 👥 팀원

#### 🔥 함께하는 팀원
<table>
<tr>
<td align="center"><img src='https://avatars.githubusercontent.com/u/148981647?v=4' alt='김민지' width="100"><br><strong>김민지👑</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175283788?v=4' alt='이다이' width="100"><br><strong>이다이</strong>
<td align="center"><img src='https://avatars.githubusercontent.com/u/175284278?v=4' alt='여현승' width="100"><br><strong>여현승</strong>
</tr>
</table>

#### 🎓 함께한 팀원 
<table>
<tr>

<td align="center"><img src='https://avatars.githubusercontent.com/u/175976497?v=4' alt='김정우' width="100"><br>김정우
<td align="center"><img src='https://avatars.githubusercontent.com/u/175369230?v=4' alt='김희수' width="100"><br>김희수
<td align="center"><img src='https://avatars.githubusercontent.com/u/128114236?v=4' alt='이아영' width="100"><br>이아영
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

추후 추가 예정



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
