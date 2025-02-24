import sys
sys.stdin = open("2003.txt")

N, M = map(int, input().split())
arr = list(map(int, input().split()))

cnt = 0
cur_sum = 0

end = 0
for start in range(N):
    while cur_sum < M and end < N:
        cur_sum += arr[end]
        end += 1
    
    if cur_sum == M:
        cnt += 1
    
    cur_sum -= arr[start]

print(cnt)