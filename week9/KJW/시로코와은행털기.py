n, k, x = map(int, input().split())
abilities = [list(map(int, input().split())) for _ in range(n)]

# dp[i][j] = i번째 사람까지 고려했을 때, j명을 선택한 경우의 최대 (a의 합, b의 합)
dp = {}
dp[(0, 0)] = (0, 0)  # (인덱스, 선택한 사람 수) -> (a의 합, b의 합)

for i in range(n):
    a, b = abilities[i]
    new_dp = dp.copy()
    
    for (idx, count), (sum_a, sum_b) in dp.items():
        if count < k:  # 아직 k명을 다 선택하지 않은 경우
            new_key = (i+1, count+1)
            new_value = (sum_a + a, sum_b + b)
            
            if new_key not in new_dp or new_value[0] * new_value[1] > new_dp[new_key][0] * new_dp[new_key][1]:
                new_dp[new_key] = new_value
        
        # 현재 사람을 선택하지 않는 경우
        new_key = (i+1, count)
        if new_key not in new_dp or (sum_a * sum_b > new_dp[new_key][0] * new_dp[new_key][1]):
            new_dp[new_key] = (sum_a, sum_b)
    
    dp = new_dp

# 최종 결과 반환
sum_a, sum_b = dp[(n, k)]
result = sum_a * sum_b

print(result)