# [🔗 백준 6603 로또](https://www.acmicpc.net/problem/6603)


# [🔗 백준 2293 동전1](https://www.acmicpc.net/problem/2293)

```python
values.sort()

dp = [0] * (k+1)
dp[0] = 1

for current in range(1, k+1):
    for value in values:
        if (current - value < 0):
            break
        dp[current] += dp[current-value] + dp[value]

print(dp[k])
```
- 처음에는 동전의 가치를 담은 `values` 배열을 정렬 한 뒤에 1부터 k까지 금액을 기준으로 동전들을 더해가는 방식을 사용했음
- 즉, `values`에 관한 반복문이 안쪽 반복문이었음
- 이렇게 되면 `1+2`와 `2+1`를 다른 경우로 **중복해서 카운트**해버린다!


```python
dp = [0] * (k+1)
dp[0] = 1

for value in values:
    for current in range(value, k+1):
        if (current - value < 0):
            break
        dp[current] += dp[current-value]

print(dp[k])
```
- **동전 하나를 고정해 놓고 해당 동전으로 만들 수 있는 금액을 갱신하는 방식**을 사용하면 중복 카운트 문제 해결

