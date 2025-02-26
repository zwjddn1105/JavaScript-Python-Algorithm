n = int(input())
have = list(map(int, input().split()))
have.sort()

m = int(input())
confirm = list(map(int, input().split()))

result = []

for num in confirm:
    isfind = False
    start = 0
    end = n-1
    while start <= end:
        mid = (start + end) // 2
        if have[mid] == num:
            result.append('1')
            isfind = True
            break
        elif have[mid] < num:
            start = mid + 1
        elif have[mid] > num:
            end = mid - 1

    if not isfind:
        result.append('0')
answer = " ".join(result)
print(answer)
