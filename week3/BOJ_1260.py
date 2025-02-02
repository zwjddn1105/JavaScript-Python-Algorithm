# 백준 1260 - DFS와 BFS
from collections import deque

# 정점의 개수 N, 간선의 개수 M, 시작 정점 V
N, M, V = map(int, input().split())

# 그래프 초기화 (1부터 N까지의 정점)
graph = [[] for _ in range(N + 1)]

# 간선 정보 입력
for _ in range(M):
   a, b = map(int, input().split())
   # 양방향 간선이므로 양쪽에 추가
   graph[a].append(b)
   graph[b].append(a)

# 각 정점의 인접 리스트를 정렬 (번호가 작은 것부터 방문하기 위해)
for i in range(1, N + 1):
   graph[i].sort()

# DFS 구현 (재귀)
def dfs(v, visited):
   # 현재 정점 방문 처리
   visited[v] = True
   print(v, end=' ')
   
   # 인접한 정점 중 방문하지 않은 정점을 재귀적으로 방문
   for i in graph[v]:
       if not visited[i]:
           dfs(i, visited)

# BFS 구현
def bfs(start):
   # 방문 배열 초기화
   visited = [False] * (N + 1)
   # 큐 생성 및 시작 정점 추가
   queue = deque([start])
   visited[start] = True
   
   # 큐가 빌 때까지 반복
   while queue:
       # 큐에서 정점을 하나 꺼내서 출력
       v = queue.popleft()
       print(v, end=' ')
       
       # 인접한 정점 중 방문하지 않은 정점을 큐에 추가
       for i in graph[v]:
           if not visited[i]:
               queue.append(i)
               visited[i] = True

# DFS 수행
visited = [False] * (N + 1)
dfs(V, visited)
print()  # 줄바꿈

# BFS 수행
bfs(V)