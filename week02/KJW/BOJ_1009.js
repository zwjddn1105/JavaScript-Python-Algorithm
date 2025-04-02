const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n")

for (let i = 0; i <= Number(n) - 1; i++) {
  let arr = []
  const nums = input[i].split(" ")
  const a = Number(nums[0])
  const b = Number(nums[1])
  if (a % 10 === 0) {
    console.log(10)
    continue
  }
  let num = a
  for (let j = 1; j <= b; j++) {
    let last_num = num % 10
    if (arr.includes(last_num)) {
      break
    } else {
      arr.push(last_num)
      num *= a
    }
  }

  if (b % arr.length === 0) {
    let result = arr[arr.length - 1]
    console.log(result)
  } else {
    let result = arr[(b % arr.length) - 1]
    console.log(result)
  }
}
