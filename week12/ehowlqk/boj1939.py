def kruskal(x, y):

    def union(x, y):
        root_x = find(x)
        root_y = find(y)
        
        if root_x == root_y:
            return
        
        if root_x < root_y:
            parent[root_y] = root_x
        else:
            parent[root_x] = root_y


    def find(x):
        if x == parent[x]:
            return x

        parent[x] = find(parent[x])
        return parent[x]

    # 최대무게, 간선 수 초기화
    weight, cnt = 10e9, 0

    for a, b, c in bridges:
        # MST 생성
        if find(a) != find(b):
            union(a, b)
            weight = min(weight, c)
            cnt += 1
            # MST 만들어지거나 x, y가 연결되면 탈출
            if cnt == n-1 or find(x) == find(y):
                break

    return weight


n, m = map(int, input().split())

bridges = [list(map(int, input().split())) for _ in range(m)]
bridges.sort(key=lambda x: -x[2])   # 무게 내림차순으로 정렬
parent = [_ for _ in range(n + 1)]

a, b = map(int, input().split())

print(kruskal(a, b))
