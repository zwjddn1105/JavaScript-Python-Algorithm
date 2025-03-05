n = int(input())
arr = list(map(int, input().split()))

left = 0
right = n - 1
INF = float('inf')
mix = INF
answer1 = 0
answer2 = 0

while left < right:
    if abs(arr[left] + arr[right]) < mix:
        mix = abs(arr[left] + arr[right])
        answer1 = arr[left]
        answer2 = arr[right]
    
    if arr[left] + arr[right] < 0:
        left += 1
    else:
        right -= 1

print(answer1, answer2)