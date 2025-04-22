const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./6603.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const choiceNum = 6;

for (const line of input) {
  const nums = line.trim().split(" ").map(Number);
  // 0만 입력 받으면 종료
  if (nums[0] === 0)
    break;

  const [k, ...lstS] = nums;
  const answer = Array(choiceNum);

  const backTracking = (idx, cnt) => {
    // 종료
    if (cnt === choiceNum) {
      console.log(answer.join(" "));
      return;
    }
    // 백트래킹 종료
    if (k - idx < choiceNum - cnt)
      return;
    // 재귀
    for (let i = idx; i < k; i++) {
      answer[cnt] = lstS[i];
      backTracking(i + 1, cnt + 1);
    }
  };

  backTracking(0, 0);
  console.log();
}
