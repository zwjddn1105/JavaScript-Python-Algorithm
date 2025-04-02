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
"""
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
"""
# 3차 제출 -- 오답
"""
N = int(input())
SG_list = list(map(int, input().split()))
M = int(input())
check_list = list(map(int, input().split()))

for check in check_list:
    low, high = 0, N-1
    exist = False
    while low <= high:
        mid = (low + high) // 2
        if SG_list[mid] > check: 
            high = mid - 1 
        elif SG_list[mid] < check:
            low = mid + 1 
        else:
            exist = True
            break
    print(1 if exist else 0, end=' ')
"""

# 4차 제출 -- 정답
import sys

N = int(sys.stdin.readline())
SG_list = sorted(list(map(int, sys.stdin.readline().split())))
M = int(sys.stdin.readline())
check_list = list(map(int, sys.stdin.readline().split()))

for check in check_list:
    low, high = 0, N-1
    exist = False
    while low <= high:
        mid = (low + high) // 2
        if SG_list[mid] > check:
            high = mid - 1
        elif SG_list[mid] < check:
            low = mid + 1
        else:
            exist = True
            break
    print(1 if exist else 0, end=' ')