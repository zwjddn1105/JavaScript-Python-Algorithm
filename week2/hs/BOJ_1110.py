# 더하기 사이클 - 파이썬

n = int(input())

def add_cycle(n):
    num = n
    cnt = 0

    while True:
        sum_num = (num // 10) + (num % 10)
        new_num = (num % 10) * 10 + (sum_num % 10)

        cnt += 1

        if new_num == n:
            break

        num = new_num
    
    return cnt

print(add_cycle(n))