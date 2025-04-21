import sys
sys.stdin = open("2293.txt")

n, k = map(int, input().split())

values = [0] * n
for i in range(n):
    values[i] = int(input())

dp = [0] * (k+1)
dp[0] = 1

for value in values:
    for current in range(value, k+1):
        if (current - value < 0):
            break
        dp[current] += dp[current-value]

print(dp[k])