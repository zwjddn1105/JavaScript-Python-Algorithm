
"""
풀이 방식: BFS
예외: 불이 여러 개 있는 경우, 처음에 이미 탈출한 상태인 경우, 불이 없는 경우



1. 큐에 (위치, 거리, 타입) push
2. 방문 처리는 graph에 직접 표시하는 것으로 대체
3-1. 큐에 지훈이 먼저 처리, 불은 나중에 -> 이후 큐에서 pop 할 때 type이 지훈이고 해당 위치에 불이 있으면 continue
3-2. 혹은, 불 먼저 처리 -> 초기 상태만 예외적으로 확인
"""

from collections import deque
import sys

sys.stdin = open("./week12/ehowlqk/boj4179.txt", "r")

def iscape(r, c, location):
    if location[0] == 0 or location[0] == r - 1 or location[1] == 0 or location[1] == c - 1:
        return True


r, c = map(int, input().split())

graph = [list(input()) for _ in range(r)]
q = deque()
jihoon = []

for i in range(r):
    for j in range(c):
        if graph[i][j] == 'J':
            jihoon = [i, j]
        elif graph[i][j] == 'F':
            q.append(((i, j), 0, 1))

q.append((jihoon, 0, 0))

dr, dc = [1, -1, 0, 0], [0, 0, 1, -1]


if iscape(r, c, jihoon):
    print(1)
else:
    while q:
        location, distance, type = q.popleft()

        if not type and iscape(r, c, location):
            print(distance + 1)
            break
        
        for i in range(4):
            nr, nc = location[0] + dr[i], location[1] + dc[i]

            if 0 <= nr < r and 0 <= nc < c:
                if type:    # 불
                    if graph[nr][nc] == '.' or graph[nr][nc] == 'J':
                        graph[nr][nc] = 'F'
                        q.append(((nr, nc), distance + 1, type))

                else:   #  지훈
                    if graph[nr][nc] == '.':
                        graph[nr][nc] = 'J'
                        q.append(((nr, nc), distance + 1, type))
    else:
        print('IMPOSSIBLE')
