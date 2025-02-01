const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let stack = [];

for (let i = 0; i < N; i++) {
  // console.log(arr[i])

  const cmd = arr[i].trim().split(" ");
  // console.log(cmd[0])

  switch (cmd[0]) {
    case "push":
        stack.push(cmd[1]);
        break;
    case "pop":
        console.log(stack.length>0 ? stack.pop() : -1);
        break;
    case "size":
        console.log(stack.length);
        break;
    case "empty":
        console.log(stack.length>0 ? 0 : 1);
        break;
    case "top":
        console.log(stack.length>0 ? stack[stack.length-1] : -1);
        break;
    }
}
