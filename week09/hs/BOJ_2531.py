n, d, k, c = map(int, input().split())
sushi_arr = [int(input()) for _ in range(n)]

check = [0] * (d + 1)   # 초밥의 개수를 저장할 리스트
check[c] += 1           # 쿠폰의 초밥은 무조건 포함
cnt = 1                 # 초밥 가짓수 -> 쿠폰 초밥 포함하며 시작

# 처음 k개만큼 선택해서 초밥 가짓수 구하기
for i in range(k):
    # 먹은 적 없는 종류의 스시라면 가짓수 카운트 +1
    if check[sushi_arr[i]] == 0:
        cnt += 1
    check[sushi_arr[i]] += 1

result = cnt

# 앞 초밥 빼고, 뒤의 초밥 추가하며 가짓수 갱신하기
for i in range(n):
    minus_sushi = sushi_arr[i]  # 맨 앞 초밥
    check[minus_sushi] -= 1     # 초밥 개수 줄이기
    if check[minus_sushi] == 0: # 만약 한 번만 먹었던 초밥이라면 가짓수 카운트에서 빼기
        cnt -= 1
    
    add_sushi = sushi_arr[(i + k) % n]  # 맨 뒤 초밥
    if check[add_sushi] == 0:   # 처음 먹는 초밥이면면
        cnt += 1                # 가짓수 카운트에 더하고
    check[add_sushi] += 1       # 초밥 개수 반영하기기

    result = max(result, cnt)   # 가짓수 갱신

print(result)
