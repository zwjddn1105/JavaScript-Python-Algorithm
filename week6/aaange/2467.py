"""
- 분류 : 이분 탐색, 투 포인터
- 성능 요약
    - 메모리 : 44748 KB
    - 시간 : 116 ms
- 제출 일자 : 2025-02-24 17:16
"""

N = int(input()) # 전체 용액의 수
arr = list(map(int, input().split()))

# 투 포인터 초기화
left = 0
right = N - 1
min_value = float("inf")
result = []

while left < right:
    mix = arr[left] + arr[right]

    # 현재 조합이 0에 더 가까우면 갱신
    if abs(mix) < min_value:
        min_value = abs(mix)
        result = [arr[left], arr[right]]

    if mix > 0:
        right -= 1
    else:
        left += 1
        

print(result[0], result[1])
