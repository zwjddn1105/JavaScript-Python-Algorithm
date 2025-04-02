import sys
sys.stdin = open("2531.txt")

N, d, k, c = map(int, input().split())

belt = [int(input()) for _ in range(N)]
belt = belt + belt # 회전 초밥이니까 원형 구조를 고려 ..

answer = 0
for i in range(N):
    sushi = set(belt[i:i+k])
    sushi.add(c)
    answer = max(answer, len(sushi))

print(answer)