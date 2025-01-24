n = int(input())
first_n = n
cycle = 0

while True:
    two = n % 10
    one_plus_two = (n // 10) + two
    if one_plus_two >= 10:
        one_plus_two %= 10
    new_n = two*10 + one_plus_two
    cycle += 1
    if first_n == new_n:
        break
    else:
        n = new_n

print(cycle)