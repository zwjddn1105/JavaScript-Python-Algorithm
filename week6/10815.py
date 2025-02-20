# 1차 제출 -- 시간 초과
"""
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
"""

# 2차 제출 -- 시간 초과

def binary_search(target, data):
    data.sort()
    start = 0
    end = len(data) -1
    
    while start <= end:
        mid = (start + end)//2
        if data[mid] == target:
            return 1 # 있으면 1로 출력
        elif data[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return 0

N = int(input())
SG_list = list(map(int, input().split()))
M = int(input())
check_list = list(map(int, input().split()))

result = [0]*M

for i in range(M):
    result[i] = binary_search(check_list[i], SG_list)

print(result)
