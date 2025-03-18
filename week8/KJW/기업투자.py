
# 입력 처리
N, M = map(int, input().split())  
profits = [[0] * (N + 1) for _ in range(M + 1)]

for _ in range(N):
    data = list(map(int, input().split()))
    invest = data[0]  # 투자 금액
    for company in range(1, M + 1):
        profits[company][invest] = data[company]

# DP 테이블 및 경로 추적 배열 초기화
dp = [[0] * (N + 1) for _ in range(M + 1)]
path = [[0] * (N + 1) for _ in range(M + 1)]

for i in range(1, M + 1):  # 1번 기업부터 M번 기업까지
    for j in range(N + 1):  # 투자 금액 0원부터 N원까지
        for k in range(j + 1):  # i번째 기업에 k원을 투자하는 경우 고려
            new_profit = dp[i - 1][j - k] + profits[i][k]
            if new_profit > dp[i][j]:  # 최대 이익 갱신
                dp[i][j] = new_profit
                path[i][j] = k  # 투자 금액 저장

# 결과 출력 (최대 이익)
print(dp[M][N])

investment = [0] * (M + 1)
money = N
for i in range(M, 0, -1):
    investment[i] = path[i][money]
    money -= path[i][money]

print(*investment[1:])
