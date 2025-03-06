from collections import deque
q = deque()
dx = [0, 0, 1, -1, -1, -1, 1, 1]
dy = [-1, 1, 0, 0, 1, -1, 1, -1]

def bfs(i,j):
    global island
    if visited[i][j] == 1:
        return
    if arr[i][j] == 0:
        return
    q.append([i,j])
    visited[i][j] = 1
    while q:
        x, y = q.popleft()
        for k in range(8):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0<=nx<h and 0<=ny<w and arr[nx][ny] == 1 and visited[nx][ny] == 0:
                visited[nx][ny] = 1
                q.append([nx,ny])
    island += 1

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break

    arr = []
    for _ in range(h):
        data = list(map(int, input().split()))
        arr.append(data)
    visited = [[0]*w for _ in range(h)]
    island = 0
    for i in range(h):
        for j in range(w):
            bfs(i,j)

    print(island)
