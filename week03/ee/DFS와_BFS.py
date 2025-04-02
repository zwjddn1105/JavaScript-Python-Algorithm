import sys
sys.stdin = open("input.txt")

n, m, v = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(m)]

visited = [0] * (n+1)

graph = [[] for _ in range(n+1)]

for item in arr:
    i, j = item
    graph[i].append(j)
    graph[j].append(i)
    graph[i].sort()
    graph[j].sort()

# DFS
def dfs(v):
    visited[v] = 1
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(i)

from collections import deque
# BFS
def bfs(v):
    q = deque([v])
    visited[v] = 0
    while q:
        v = q.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if visited[i]:
                q.append(i)
                visited[i] = 0

dfs(v)
print()
bfs(v)