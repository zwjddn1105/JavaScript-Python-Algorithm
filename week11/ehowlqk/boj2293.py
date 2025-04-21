import sys
sys.stdin = open("boj2293.txt")

n, k = map(int, input().split())

coins = []
for _ in range(n):
    coin = int(input())
    coins.append(coin)

dp = [0] * (k+1)
dp[0] = 1

for coin in coins:
    if coin > k:
        continue

    for i in range(coin, k + 1):
        dp[i] += dp[i-coin]

print(dp[k])
