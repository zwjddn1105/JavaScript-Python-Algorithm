const fs = require("fs");
const bowl = fs.readFileSync("/dev/stdin").toString().trim();

// 기본 높이 10
result = 10;
for (let i = 1; i < bowl.length; i++) {
  // 이전에 쌓인 그릇과 방향이 같으면 +5, 다르면 + 10
  if (bowl[i - 1] === bowl[i]) {
    result += 5;
  } else {
    result += 10;
  }
}

console.log(result);
