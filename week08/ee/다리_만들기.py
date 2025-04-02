import sys
sys.stdin = open('17472.txt')

from collections import deque

N, M = map(int, input().split())
map = [list(map(int, input().split())) for _ in range(N)]

# BFS로 섬 정보 저장하기
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

islands = []
visited = [[False for _ in range(M)] for _ in range(N)]

for i in range(N):
    for j in range(M):

        # 방문하지 않은 섬이면
        if map[i][j] == 1 and not visited[i][j]:
            island = []
            q = deque([(i, j)])
            visited[i][j] = True

            # BFS로 연결된 땅 찾기
            while q:
                x, y = q.popleft()
                island.append((x, y))

                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    # 지도 내에 있고, 방문하지 않은 땅이면
                    if 0 <= nx < N and 0 <= ny < M and map [nx][ny] == 1 and not visited[nx][ny]:
                        visited[nx][ny] = True
                        q.append((nx, ny))

            islands.append(island)

# 섬이 하나 이하면 다리 필요 없음
if len(islands) <= 1:
    print(0)
    exit()

# 다리 찾기(가중치 구하기)
bridges = []

INF = 1e9
for i in range(len(islands)): # 시작 섬
    for j in range(i+1, len(islands)): # 도착 섬
        
        min_length = INF
        for xi, yi in islands[i]: # 시작 섬의 모든 좌표
            for xj, yj, in islands[j]: # 도착 섬의 모든 좌표

                # 가로 방향
                if xi == xj:
                    start, end = min(yi, yj), max(yi, yj) # 시작 열, 끝 열

                    if end - start == 1: # 거리가 1이면 안 됨
                        continue 

                    for col in range(start + 1, end):
                        if map[xi][col] == 1:
                            break
                    else:
                        bridge_length = end - start - 1
                        if bridge_length >= 2:
                            min_length = min(min_length, bridge_length)
                
                # 세로 방향
                elif yi == yj:
                    start, end = min(xi, xj), max(xi, xj)

                    if end - start == 1:
                        continue

                    for row in range(start + 1, end):
                        if map[row][yi] == 1:
                            break
                    else:
                        bridge_length = end - start - 1
                        if bridge_length >= 2:
                            min_length = min(min_length, bridge_length)

        if min_length != INF:
            bridges.append((min_length, i, j))

# 최소 값 찾기
if not bridges:
    print(-1)
    exit()

bridges.sort()

parent = list(range(len(islands)))

def find(x): # 그룹 찾기
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

def union(x, y): # 그룹 합치기
    parent[find(x)] = find(y)

answer = 0 # 총 다리 길이
connected = 0 # 연결된 다리

for length, i, j in bridges: # 짧은 다리부터 선택
    # 두 섬이 아직 연결 안 됐으면
    if find(i) != find(j):
        union(i, j) # 연결
        answer += length
        connected += 1

        # 모든 섬 연결 확인
        if connected == len(islands) - 1:
            break

if connected != len(islands) - 1:
    print(-1)
else:
    print(answer)