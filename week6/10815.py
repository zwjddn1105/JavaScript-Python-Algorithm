# 1차 제출 -- 시간 초과

N = int(input())
SG_list = list(map(int, input().split()))
M = int(input())
check_list = list(map(int, input().split()))

result = [0]*M

for i in range(M):
    for SG in range(N):
        if check_list[i] == SG_list[SG]:
            result[i] = 1
            break
