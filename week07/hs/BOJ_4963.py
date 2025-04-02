# 재귀 깊이 제한 증가 (큰 입력을 처리하기 위해)
import sys
sys.setrecursionlimit(10**6)  

def dfs(r, c):
    dr = [-1, -1, 0, 1, 1, 1, 0, -1]
    dc = [0, 1, 1, 1, 0, -1, -1, -1]
    visited[r][c] = 1

    for k in range(8):
        nr = r + dr[k]
        nc = c + dc[k]
        # arr[nr][nc] == 1 조건 추가
        if 0 <= nr < h and 0 <= nc < w and visited[nr][nc] == 0 and arr[nr][nc] == 1:
            dfs(nr, nc)



while True:
    w, h = map(int, input().split())
    # 종료 조건 추가
    if w == 0 and h == 0:
        break
    arr = [list(map(int, input().split())) for _ in range(h)]
    visited = [[0]*w for _ in range(h)]
    cnt = 0

    for i in range(h):
        for j in range(w):
            if arr[i][j] == 1 and visited[i][j] == 0:
                dfs(i, j)
                cnt += 1
            else:
                continue
    
    print(cnt)