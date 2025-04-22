const fs = require("fs");
//   const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 원래 이렇게 입력받아요?;;
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el
      .replace("\r", "")
      .split(" ")
      .map((n) => Number(n))
  );

// 비트마스킹으로 6개 숫자조합 구하기
function Combination(arr, n) {
  const combinations = [];
  for (let bit = 0; bit < 1 << n; bit++) {
    const subset = [];  // 개별 조합을 담을 배열

    for (let i = 0; i < n; i++) {
      if (bit & (1 << i)) {
        subset.push(arr[i]);
      }
    }

    if (subset.length === 6) {
      combinations.push(subset);
    }
  }

  // 사전순으로 정렬렬
  combinations.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
  });
  return combinations;
}


for (let i = 0; i < input.length - 1; i++) {
  let n = input[i][0];
  const arr = input[i].slice(1);
  const combinations = Combination(arr, n);
  // 출력 형식 맞추기기
  combinations.forEach((el) => {
    console.log(el.join(" "));
  });
  console.log();
}
