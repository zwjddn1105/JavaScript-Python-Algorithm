n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

result = 0
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def dfs(x, y, depth, answer):
    global result
    if depth == 4:
        result = max(result, answer)
        return
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<n and 0<=ny<m and visited[nx][ny] == 0:
            answer += arr[nx][ny]
            visited[nx][ny] = 1
            dfs(nx, ny, depth+1, answer)
            answer -= arr[nx][ny]
            visited[nx][ny] = 0
   
# ㅓ ㅏ ㅗ ㅜ 는 위방법으로 카바가 안됨..
def rest1(x, y): # ㅓ
    global result
    answer = arr[x][y]
    if 0<=x-1<n and 0<=x+1<n and 0<=y-1<m:
        answer += arr[x-1][y] + arr[x+1][y] + arr[x][y-1]
    result = max(result, answer)
    return

def rest2(x, y): # ㅏ
    global result
    answer = arr[x][y]
    if 0<=x-1<n and 0<=x+1<n and 0<=y+1<m:
        answer += arr[x-1][y] + arr[x+1][y] + arr[x][y+1]
    result = max(result, answer)
    return

def rest3(x, y): # ㅜ
    global result
    answer = arr[x][y]
    if 0<=x+1<n and 0<=y+1<m and 0<=y-1<m:
        answer += arr[x][y-1] + arr[x][y+1] + arr[x+1][y]
    result = max(result, answer)
    return

def rest4(x, y): # ㅗ
    global result
    answer = arr[x][y]
    if 0<=x-1<n and 0<=y+1<m and 0<=y-1<m:
        answer += arr[x][y-1] + arr[x][y+1] + arr[x-1][y]
    result = max(result, answer)
    return

for i in range(n):
    visited = [[0]*m for _ in range(n)]
    for j in range(m):
        dfs(i, j, 0, 0)
        rest1(i, j)
        rest2(i, j)
        rest3(i, j)
        rest4(i, j)

print(result)