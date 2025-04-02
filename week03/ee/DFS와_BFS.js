const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);

// console.log(n, m, v)

const graph = Array.from({ length: n + 1 }, () => []);
// graph = [[] for _ in range( n + 1 )] 이랑 동일
// 크기가 n + 1인 배열을 만들고 각 요소를 빈 배열로 초기화

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS
const visited = new Array(n + 1).fill(0);
const result = [];

function dfs(v) {
  visited[v] = 1;
  result.push(v);

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  return result;
}

console.log(dfs(v).join(" "));

// BFS
function bfs(v) {
  const result = [];
  const q = [v];
  visited[v] = 0;

  while (q.length > 0) {
    const v = q.shift();
    result.push(v);

    for (const i of graph[v]) {
      if (visited[i]) {
        visited[i] = 0;
        q.push(i);
      }
    }
  }
  return result;
}

console.log(bfs(v).join(" "));
