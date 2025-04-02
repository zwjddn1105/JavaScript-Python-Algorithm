const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [n, m, v] = input[0].split(" ").map(Number)

const graph = Array.from({ length: n + 1 }, (curValue, idx) => [])
let visited = Array(n + 1).fill(false)

// 그래프 구성 (양방향 연결)
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

// 각 연결된 리스트 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b)
}

// dfs
function dfs(graph, v, visited) {
  visited[v] = true
  process.stdout.write(v + " ")

  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i]
    if (!visited[next]) {
      dfs(graph, next, visited)
    }
  }
}
dfs(graph, v, visited)
console.log()

visited = Array(n + 1).fill(false)

// bfs
function bfs(graph, v, visited) {
  const queue = []
  queue.push(v)
  visited[v] = true

  while (queue.length > 0) {
    const v = queue.shift()
    process.stdout.write(v + " ")

    for (let i = 0; i < graph[v].length; i++) {
      const next = graph[v][i]
      if (!visited[next]) {
        queue.push(next)
        visited[next] = true
      }
    }
  }
}

bfs(graph, v, visited)
