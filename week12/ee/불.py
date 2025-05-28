import sys
sys.stdin = open("4179.txt")

from collections import deque
    
R, C = map(int, input().split())

maze = [list(input()) for _ in range(R)]

fire = deque()
fire_time = [[-1] * C for _ in range(R)]

jihoon = deque()
jihoon_time = [[-1] * C for _ in range(R)]

for i in range(R):
    for j in range(C):
        if maze[i][j] == 'F':
            fire.append((i, j))
            fire_time[i][j] = 0
        if maze[i][j] == 'J':
            jihoon.append((i, j))
            jihoon_time[i][j] = 0

# print(fire)
# print(jihoon) 

di = [-1, 1, 0, 0]
dj = [0, 0, 1, -1]

while fire:
    i, j = fire.popleft()

    for k in range(4):
        ni = i + di[k]
        nj = j + dj[k]

        # 미로 안이 아니면 
        if (ni < 0 or ni >= R or nj <0 or nj >=C):
            continue

        # 벽이면
        if maze[ni][nj] == '#':
            continue

        # 이미 불이 번졌으면
        if fire_time[ni][nj] != -1:
            continue

        fire_time[ni][nj] = fire_time[i][j] + 1
        fire.append((ni, nj))


while jihoon:
    i, j = jihoon.popleft()

    if (i == 0 or j == 0 or i == R-1 or j == C-1):
        print(jihoon_time[i][j] + 1)
        break

    for k in range(4):
        ni = i + di[k]
        nj = j + dj[k]

        # 미로 안이 아니면 
        if (ni < 0 or ni >= R or nj <0 or nj >=C):
            continue

        # 벽이면
        if maze[ni][nj] == '#':
            continue

        # 이미 지훈이가 이동한 곳이면
        if jihoon_time[ni][nj] != -1:
            continue
        
        # 이미 불이 번진 곳이면
        if fire_time[ni][nj] != -1 and fire_time[ni][nj] <= jihoon_time[i][j] + 1: # < jihoon_time[i][j]
            continue

        jihoon_time[ni][nj] = jihoon_time[i][j] + 1
        jihoon.append((ni, nj))
else:
    print("IMPOSSIBLE")
        