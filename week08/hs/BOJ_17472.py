from collections import deque

# n : 세로, m : 가로
n, m = map(int, input().split())

# 지도 데이터 저장 -> 0 : 바다, 1 : 육지
map_data = [list(map(int, input().split())) for _ in range(n)]

# 방문 여부 체크 리스트
visited = [[False] * m for _ in range(n)]

# 상, 하, 좌, 우 탐색 좌표
move = [(0, 1), (1, 0), (0, -1), (-1, 0)]

# 특정 좌표가 어느 섬에 속하는지 저장하는 딕셔너리
land = dict()

# 모든 섬 좌표와 섬 번호를 저장하는 리스트
landArr = []

# 섬을 구분하는 번호 (0부터 시작)
num = 0

# 섬 찾아서 번호 부여하기
for i in range(n):
    for j in range(m):
        if map_data[i][j] == 1 and visited[i][j] == False:
            q = deque([(i, j)])
            visited[i][j] = True
            land[(i, j)] = num
            landArr.append((i, j, num))

            while q:
                x, y = q.popleft()
                for r, c in move:
                    nx = x + r
                    ny = y + c
                    # ✅ 수정: 바다(0)일 때 큐에 추가되지 않도록 조건 수정
                    if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == False and map_data[nx][ny] == 1:
                        q.append((nx, ny))
                        visited[nx][ny] = True
                        land[(nx, ny)] = num
                        landArr.append((nx, ny, num))
            
            num += 1

# 섬과 섬을 연결하는 다리를 저장할 리스트
edges = []

# 각 섬의 모든 좌표에서 다리를 만들 수 있는지 체크
for x, y, fromLand in landArr:
    for r, c in move:
        dist = 0
        nx = x + r
        ny = y + c

        # 한방향으로 계속 이동하며 다리를 만들 수 있는지 체크
        while True:
            # 범위를 벗어나면 중단
            if not (0 <= nx < n and 0 <= ny < m):
                break
            
            # 이동한 위치가 섬인지 확인
            toLand = land.get((nx, ny))

            # 같은 섬이면 다리를 만들 수 없음 -> 중단
            if fromLand == toLand:
                break

            # 바다라면 계속 진행하며 다리 길이 늘리기
            if toLand == None:
                nx = nx + r
                ny = ny + c
                dist += 1
                continue

            # 다리 길이가 2 미만이면 다리 건설 불가 -> 중단
            if dist < 2:
                break

            # 다리를 만들 수 있으면 리스트에 추가 (거리, 출발 섬, 도착 섬)
            edges.append((dist, fromLand, toLand))
            break

# ✅ 수정: 다리 정렬을 오름차순으로 변경 (거리가 짧은 순서로)
edges.sort()

# 크루스칼 알고리즘 !! 모르겠음 !!!!
# 최소 다리 길이
result = 0

# 연결해야 하는 다리 개수 (섬 개수 - 1)
cnt = num - 1

# 유니온 파인드를 위한 부모 배열
parents = [i for i in range(num)]

# 다리를 만들 수 없는 경우를 체크하는 플래그
flag = 0

# 유니온 파인드 함수 .. 모르겠음 ....
def find(k):
    if k != parents[k]:  # 부모 노드가 자기 자신이 아니라면
        parents[k] = find(parents[k])  # 재귀적으로 부모 찾기 (경로 압축)
    return parents[k]

def union(x, y):
    x = find(x)  # x의 부모 찾기
    y = find(y)  # y의 부모 찾기
    if x != y:  # ✅ 수정: 같은 부모라면 합치지 않음 (사이클 방지)
        parents[y] = x  # y의 부모를 x로 설정 (연결)

# 다리 연결 시작 (최소 신장 트리 만들기)
while cnt:
    try:
        distance, a, b = edges.pop(0)  # ✅ 수정: pop() → pop(0) (가장 짧은 다리부터 선택)
    except:
        flag = 1  # 다리를 다 사용했지만 연결이 끝나지 않음
        break
    
    # 같은 집합(이미 연결된 섬)이 아니라면 연결
    if find(a) != find(b):
        union(a, b)
        result += distance  # 최소 비용 추가
        cnt -= 1  # ✅ 수정: count → cnt (변수명 오류 수정)

# 모든 섬을 연결할 수 없는 경우 -1 출력
if flag == 1:
    print(-1)
else:
    print(result)  # 최소 다리 길이 출력
