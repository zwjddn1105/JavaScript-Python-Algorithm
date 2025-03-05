"""
- 분류 : 브루트포스 알고리즘, 누적 합, 두 포인터
- 성능 요약
    - 메모리 : 33432 KB
    - 시간 : 548 ms
- 제출 일자 : 2025-02-24 15:53
"""

N, M = map(int, input().split())
array = list(map(int, input().split()))

count = 0
t = False

for i in range(N):
    if t == True:
        break
    num = 0
    idx = 0
    while num < M:
        if (i + idx) >= N:
            t = True
            break
        num += array[i + idx]
        if num == M:
            count += 1
            break
        else:
            idx += 1

print(count)