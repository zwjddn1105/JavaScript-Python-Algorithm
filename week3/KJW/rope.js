const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

let result = 0
// return 안썼다가 애먹었네요
input.sort((a, b) => {
  return Number(a.trim()) - Number(b.trim())
})

for (let i = 0; i <= n - 1; i++) {
  result = Math.max(result, input[i] * (n - i))
}
console.log(result)
