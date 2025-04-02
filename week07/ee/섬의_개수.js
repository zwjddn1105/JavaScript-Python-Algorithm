const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./4963.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")

let line = 0

while (input.length > 1) {
  const [w, h] = input[line++].split(" ").map(Number)

  if (w == 0 && h == 0) {
    break
  }

  const map = []
  for (let i = 0; i < h; i++) {
    map.push(input[line++].split(' ').map(Number))
  }

  const answer = countIsland(map, w, h)
  console.log(answer)
}

function countIsland(map, w, h) {
  const visited = Array.from({ length: h }, () => Array(w).fill(false))
  let cnt = 0

  const dx = [1, -1, 0, 0, 1, 1, -1, -1]
  const dy = [0, 0, 1, -1, 1, -1, 1, -1]

  function dfs(x, y) {
    visited[x][y] = true

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (
        (nx >= 0 && nx < h) && (ny >= 0 && ny < w) && (map[nx][ny] == 1) && (!visited[nx][ny])
      ) {
        dfs(nx, ny)
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j= 0; j<w; j++) {
      if(map[i][j] === 1 && !visited[i][j]) {
        dfs(i, j)
        cnt ++
      }
    }
  }
  
  return cnt
}