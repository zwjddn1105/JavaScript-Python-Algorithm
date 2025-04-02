const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

let stack = []
let result = []
for (let i = 0; i <= n - 1; i++) {
  let data = input[i].split(" ")
  if (data[0].trim() === "push") {
    stack.push(Number(data[1]))
  } else if (data[0].trim() === "pop") {
    if (stack.length > 0) {
      result.push(stack.pop())
    } else {
      result.push(-1)
    }
  } else if (data[0].trim() === "size") {
    result.push(stack.length)
  } else if (data[0].trim() === "empty") {
    if (stack.length > 0) {
      result.push(0)
    } else {
      result.push(1)
    }
  } else if (data[0].trim() === "top") {
    if (stack.length > 0) {
      result.push(stack[stack.length - 1])
    } else {
      result.push(-1)
    }
  }
}

console.log(result.join("\n"))
