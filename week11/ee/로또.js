const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./6603.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const DFS = (S, start, current, combinations) => {
  if (current.length === 6) {
    combinations.push([...current]);
    return;
  }

  for (let i = start; i < S.length; i++) {
    current.push(S[i]);

    DFS(S, i + 1, current, combinations);

    current.pop();
  }

}

let line = 0;

while (line < input.length) {
  const numbers = input[line].trim().split(" ").map(Number);

  if (numbers.length === 1 && numbers[0] === 0) {
    break;
  }

  const k = numbers[0];
  const S = numbers.slice(1);

  const combinations = [];
  const current = []; // 현재 조합

  DFS(S, 0, current, combinations);

  combinations.forEach(combination => {
    console.log(combination.join(' '));
  })

  if (line < input.length - 1) {
    console.log();
  }

  line++;
}

