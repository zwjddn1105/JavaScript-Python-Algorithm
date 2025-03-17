# DP + 냅색 알고리즘 (최적의 선택을 찾아내는 알고리즘)
# 돈을 투자할 때마다, 최적의 이익을 얻도록 기록하면서 채우기
# 핵심 아이디어 -> dp[i][j] : i원을 사용해서 j번째 기업까지 투자할 때 얻을 수 있는 최대 이익

n, m = map(int, input().split()) # 투자 금액 n, 기업 개수 m
investments = [[0] * (m + 1)]    # 투자 데이터 (0번째 행 추가)
for _ in range(n):
    data = list(map(int, input().split()))
    investments.append(data)

# dp 테이블 (이전 최적 결과를 저장)
# dp[i][j] : i 원을 사용해서 j 번째 기업까지 투자할 때 얻을 수 있는 최대 이익
dp = [[0] * (m + 1) for _ in range(n + 1)]
path = [[0] * (m + 1) for _ in range(n + 1)] # 투자 경로 저장

# dp
for money in range(1, n + 1):       # 투자 금액을 1부터 n까지 고려
    for company in range(1, m + 1): # 각 기업에 투자할지 결정
        dp[money][company] = dp[money][company-1]   # 우선 이전 기업까지의 최대 이익 복사
        for invest in range(money + 1): # 현재 가진 금액에서 투자할 금액 선택
            # money - invest 만큼의 금액으로 이전 기업까지 투자했을 때의 최대 이익을 가져오고,
            # 여기에 invest 금액을 현재 company(기업)에 투자했을 때 얻을 이익을 더함.
            new_profit = dp[money - invest][company - 1] + investments[invest][company]
            if new_profit > dp[money][company]: # 더 큰 이익이면 갱신
                dp[money][company] = new_profit
                path[money][company] = invest  # 투자한 금액 저장

# 최적의 투자 조합 구하기
money, company = n, m   # 투자할 전체 금액과 마지막 기업부터 추적 시작
result = [0] * (m + 1)  # 각 기업에 투자한 금액을 저장할 리스트


# path 배열을 이용해 최적의 투자 경로를 역추적
while company > 0:
    result[company] = path[money][company]  # 현재 기업에 투자한 금액 저장
    money -= path[money][company]   # 사용한 금액만큼 차감
    company -= 1    # 이전 기업으로 이동

print(dp[n][m])
print(*result[1:])