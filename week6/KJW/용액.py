n = int(input())
arr = list(map(int, input().split()))
answer1, answer2 = 0, 0
distance = 1e9
boundary = 0
if arr[0] < 0 and arr[-1] > 0:
    for idx in range(n):
        if arr[idx] > 0:
            boundary = idx
            break
    alkali = arr[0:boundary]
    acid = arr[boundary:]
    for num1 in alkali:
        for num2 in acid:
            if abs(num1 + num2) < distance:
                answer1, answer2 = num1, num2
            else:
                break
    print(answer1, answer2)

elif arr[0] < 0 and arr[-1] < 0:
    print(arr[-2], arr[-1])
elif arr[0] > 0 and arr[-1] > 0:
    print(arr[0], arr[1])
                        


