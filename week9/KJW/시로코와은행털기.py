n, k, x = map(int, input().split())
arr = [0]*n
dp = [[0]*(x*k + 1) for _ in range(k+1)]

for i in range(n):
    a, b = map(int, input().split())
    arr[i] = a

for p in arr:
    for i in range(k, 0, -1):  # k부터 1까지
        for j in range(x*k, p-1, -1):  # x*k부터 p까지
            dp[i][j] = dp[i][j] or dp[i-1][j-p] 
            # j-p가 가능하다면 dp[i][j] 가능
    dp[1][p] = 1  # 첫 번째 아이템에 대해서는 p를 가능하게 설정



answer = 0
for i in range(x*k + 1):
    if dp[k][i]:
        answer = max(answer, i*(x*k - i))
# print(dp)
print(answer)