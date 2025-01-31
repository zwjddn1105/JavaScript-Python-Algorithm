const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...names] = fs.readFileSync(filePath).toString().trim().split("\n");
let obj = {};

for (let i = 0; i <= n - 1; i++) {
  if (!obj[names[i][0]]) {
    obj[names[i][0]] = 1;
  } else {
    obj[names[i][0]] += 1;
  }
}

const key_arr = Object.keys(obj);
const length = key_arr.length;
let result = "";
for (let j = 0; j <= length - 1; j++) {
  if (obj[key_arr[j]] >= 5) {
    result += key_arr[j];
  }
}

if (!result) {
  console.log("PREDAJA");
} else {
  let arr = result.split("");
  arr.sort();
  console.log(arr.join(""));
}
