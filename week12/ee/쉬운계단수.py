N = int(input())

dp = [[0] * 10 for _ in range(N+1)]
dp[1] = [0] + [1] * 9 +[0]

for i in range(2, N+1):
    dp[i][0] = dp[i-1][1] # j == 0
    for j in range(1, 9): # j == 1~8
        dp[i][j] = dp [i-1][j-1] + dp[i-1][j+1]
    dp[i][9] = dp[i-1][8] # j == 9

print(sum(dp[N][:10]) %  1000000000)