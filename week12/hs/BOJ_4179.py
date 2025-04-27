from collections import deque

dr = [1, 0, -1, 0]
dc = [0, 1, 0, -1]

# 불 BFS
def fire_bfs():
    while f:
        x, y = f.popleft()

        for k in range(4):
            nr = x + dr[k]
            nc = y + dc[k]

            if 0 <= nr < r and 0 <= nc < c:
                if maze[nr][nc] != '#' and fire[nr][nc] == 0:
                    f.append((nr, nc))
                    # 방문기록 + 시간 저장 (이전 시간 + 1)
                    fire[nr][nc] = fire[x][y] + 1

# 지훈 BFS
def jihoon_bfs():
    while ji:
        x, y = ji.popleft()

        for k in range(4):
            nr = x + dr[k]
            nc = y + dc[k]

            # 지훈의 위치가 미로 밖인 경우 -> 탈출
            if nr < 0 or nr >= r or nc < 0 or nc >= c:
                print(jihoon[x][y])
                return
            
            if 0 <= nr < r and 0 <= nc < c:
                if maze[nr][nc] == '.' and jihoon[nr][nc] == 0:
                    if fire[nr][nc] == 0 or fire[nr][nc] > jihoon[x][y] + 1:
                        ji.append((nr, nc))
                        # 방문기록 + 시간 저장 (이전 시간 + 1)
                        jihoon[nr][nc] = jihoon[x][y] + 1
    
    # while문이 끝났다면 탈출 불가능
    print('IMPOSSIBLE')


r, c = map(int, input().split())
maze = [list(input().strip()) for _ in range(r)]

# 지훈의 방문 기록 + 걸린 시간을 저장할 배열
jihoon = [[0]*c for _ in range(r)]
# 불의 방문 기록 + 걸린 시간을 저장할 배열
fire = [[0]*c for _ in range(r)]

ji = deque()  # 지훈의 위치 저장할 덱
f = deque()   # 불의 위치 저장할 덱

# 지훈과 불의 위치를 찾아서 각 덱에 넣기
for i in range(r):
    for j in range(c):
        if maze[i][j] == 'J':
            ji.append((i, j))
            jihoon[i][j] = 1
        elif maze[i][j] == 'F':
            f.append((i, j))
            fire[i][j] = 1

# BFS 시작
fire_bfs()
jihoon_bfs()