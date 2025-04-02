from collections import deque
import sys
sys.setrecursionlimit(10**5)

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

visited = [[0]*n for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
island = 2

def dfs(x,y):
    visited[x][y] = 1
    graph[x][y] = island
    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]
        if 0<=nx<n and 0<=ny<n and graph[nx][ny] == 1 and visited[nx][ny] == 0:
            dfs(nx, ny)

for i in range(n):
    for j in range(n):
        if visited[i][j] == 0 and graph[i][j] == 1:
            dfs(i, j)
            island += 1 # 섬 번호가 2부터 시작해서 개수만큼 있을 것

def bfs(x, y, island_num):
    global answer
    bridge = 0
    q = deque()
    visited[x][y] = 1
    q.append([x, y, bridge])
    while q:
        a , b, length = q.popleft()
        for k in range(4):
            nx = a + dx[k]
            ny = b + dy[k]
            if 0<=nx<n and 0<=ny<n and graph[nx][ny] != island_num and visited[nx][ny] == 0:
                if graph[nx][ny] == 0:
                    q.append([nx, ny, length+1])
                    visited[nx][ny] = 1
                else:
                    answer = min(answer, length)

answer = 1e9
for i in range(n):
    for j in range(n):
        visited = [[0]*n for _ in range(n)] # 방문기록 초기화
        if visited[i][j] == 0 and graph[i][j] != 0:
            bfs(i, j, graph[i][j])

print(answer)