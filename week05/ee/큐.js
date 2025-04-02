const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./10845.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0])

let stack = []
let ans = []

for (let i = 1; i <= N; i++) {

  const cmd = input[i].trim().split(" ")

  switch (cmd[0]) {
    case 'push':
      stack.push(parseInt(cmd[1]));
      break;

    case 'pop':
      if (stack.length > 0) {
        ans.push(stack.shift())
      } else {
        ans.push(-1)
      }
      break;

    case 'size':
      ans.push(stack.length);
      break;
      
    case 'empty':
      if (stack.length > 0) {
        ans.push(0)
      } else {
        ans.push(1)
      }
      break;

    case 'front':
      if (stack.length > 0) {
        ans.push(stack.at(0))
      } else {
        ans.push(-1)
      }
      break;

    case 'back':
      if (stack.length > 0) {
        ans.push(stack.at(-1))
      } else {
        ans.push(-1)
      }
      break;

  }
}

console.log(ans.join('\n'));