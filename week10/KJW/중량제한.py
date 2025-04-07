from collections import deque
n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

start, end = map(int, input().split())

left = 1
right = 1000000000 # c값범위

def bfs(binarySearch):
    visited = [0] * (n+1)
    q = deque()
    for node, weight in graph[start]:
        if weight >= binarySearch:
            visited[start] = 1
            q.append((node, weight))
    while q:
        node, weight = q.popleft()
        if node == end:
            return True
        if visited[node] == 0:
            visited[node] = 1
            for next, next_weight in graph[node]:
                if next_weight >= binarySearch:
                    q.append((next, next_weight))
    return False

ans = 0
while left <= right:
    mid = (left + right) // 2
    if bfs(mid):
        ans = mid
        left = mid + 1
    else:
        right = mid - 1

print(ans)