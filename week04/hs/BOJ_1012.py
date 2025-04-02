# 유기농 배추

import sys
sys.setrecursionlimit(10**6)

def dfs(r, c):
    # 상, 하, 좌, 우 방향
    dr = [0, 1, 0, -1]
    dc = [-1, 0, 1, 0]

    for i in range(4):
        nr = r + dr[i]
        nc = c + dc[i]

        # 유효한 범위 내에서, 배추(1)일 경우 방문
        if (0 <= nr < n) and (0 <= nc < m) and (arr[nr][nc] == 1):
            arr[nr][nc] = 0  # 방문 처리
            dfs(nr, nc)

t = int(input())  # 테스트 케이스 개수

for tc in range(t):
    # m: 가로, n: 세로, k: 배추 개수
    m, n, k = map(int, input().split())
    arr = [[0] * m for _ in range(n)]  # 세로 n, 가로 m 크기의 2D 리스트 생성

    # 배추 위치 입력받기
    for _ in range(k):
        x, y = map(int, input().split())
        arr[y][x] = 1  # y가 행, x가 열

    cnt = 0  # 배추 군집 개수

    for i in range(n):  # 세로 (행)
        for j in range(m):  # 가로 (열)
            if arr[i][j] == 1:  # 배추 발견하면 DFS 탐색 시작
                dfs(i, j)
                cnt += 1  # 새로운 군집 발견

    print(cnt)  # 배추 군집 개수 출력