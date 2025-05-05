import sys
sys.stdin = open('1939.txt')

N, M = map(int, input().split())

graph = [[] for _ in range(N+1)]

for _ in range(M):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

x, y = map(int, input().split()) # 공장이 위치한 섬 번호    


def check(limit):
    visited = [0] * (N+1)
    q = []
    
    q.append(x) # 시작 섬
    visited[x] = 1

    while q:
        current = q.pop()

        if current == y: # 도착 섬이면
            return True
        
        for neighbor, weight in graph[current]:
            if not visited[neighbor] and weight >= limit:
                visited[neighbor] = True
                q.append(neighbor)

    return False


left = 1
right = 1000000000

result = 0

while left <= right:
    mid = (left + right) // 2

    if check(mid):
        result = mid
        left = mid + 1
    
    else:
        right = mid - 1

print(result)