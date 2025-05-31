# 중량이 가장 큰 다리부터 연결해보며 출발지와 도착지가 연결되는 시점 찾기

import sys

input = sys.stdin.readline

N, M = map(int, input().split()) # N 섬 개수, M 다리 개수

graph = []

# 현재 노드의 부모 노드(대표 노드) 찾기
def find(c):
	if par[c] == c:
		return c
	else:
		par[c] = find(par[c])
	return par[c]

# 다리 연결
def union(a, b):
	a, b = find(a), find(b)
	par[max(a, b)] = min(a, b)

# 같은 집합에 속해 있는지 확인 (같은 대표 노드를 가지는지)
def check(a, b):
	return find(a) == find(b)


for _ in range(M):
    a, b, c = map(int, input().split())
    graph.append([c, a, b])

start, end = map(int, input().split()) # 출발지, 목적지

par = [i for i in range(N+1)] # 부모 노드 배열 초기화 (유니온 파인드 기본 설정)

graph.sort(key=lambda x: x[0], reverse=True) # 내림차순 정렬


# 다리 연결 + 연결 확인
for i in graph:
    c, a, b = i[0], i[1], i[2]
    union(a, b)
    if check(start, end):
        print(c)
        break
    
