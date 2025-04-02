N = int(input())

cycle = 0

prev = N
pres = 0

while True :
    if prev < 10:
        pres = str(prev) + str(prev)
    else :
        pres = str(prev%10) + str(((prev % 10) +(prev//10)) % 10)
    prev = int(pres)
    
    cycle += 1
    if prev == N:
        break

print(cycle)