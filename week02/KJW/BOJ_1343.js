const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const length = input.length;
let count = 0;
let result = "";

function pol() {
  for (let i = 0; i <= length - 1; i++) {
    if (input[i] === "X") {
      count += 1;
    } else {
      if (count % 2 === 0) {
        let a = Math.floor(count / 4);
        let b = count - 4 * a;
        result += "AAAA".repeat(a);
        result += "B".repeat(b);
        result += ".";
        count = 0;
      } else {
        result = -1;
        return;
      }
    }
  }
  if (count % 2 === 0) {
    let a = Math.floor(count / 4);
    let b = count - 4 * a;
    result += "AAAA".repeat(a);
    result += "B".repeat(b);
    count = 0;
  } else {
    result = -1;
    return;
  }
}
pol();

console.log(result);
