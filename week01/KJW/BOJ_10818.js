const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [tc, ...arr1] = input;

arr = arr1[0].split(" ");

// let min_num = Number(arr[0]);
// let max_num = Number(arr[0]);

// for (let i = 0; i <= tc - 1; i++) {
//   if (min_num > Number(arr[i])) {
//     min_num = Number(arr[i]);
//   }
//   if (max_num < Number(arr[i])) {
//     max_num = Number(arr[i]);
//   }
// }

// console.log(min_num, max_num);
let max_num = Math.max(...arr);
let min_num = Math.min(...arr);
console.log(min_num, max_num);
