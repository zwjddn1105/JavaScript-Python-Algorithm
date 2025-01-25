const fs = require("fs")
const [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n")
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let name = {}

// name[arr[i][0]] = 입력 받은 이름의 제일 앞 알파벳
// 만약 배열에 해당 알파벳이 없으면 0으로 초기화 한 후 +1
// if문을 통한 0으로의 초기화 과정이 없으면 NaN 반환
for (let i = 0; i < n; i++) {
  if (!name[arr[i][0]]) {
    name[arr[i][0]] = 0
  }
  name[arr[i][0]] += 1
}

let result = []

// idx -> 키값 (알파벳)
for (let idx in name) {
  if (name[idx] >= 5) {
    result.push(idx)
  }
}

if (result.length === 0) {
  console.log("PREDAJA")
} else {
  console.log(result.sort().join(""))
}
