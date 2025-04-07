const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numList = input[1].split(" ").map(Number);

const sortedNumList = [...new Set(numList)].sort((a, b) => a - b);

const numToIndex = new Map();
sortedNumList.forEach((num, index) => {
  numToIndex.set(num, index);
});

const answer = numList.map(num => numToIndex.get(num)).join(" ");
console.log(answer);
