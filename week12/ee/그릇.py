dishes = input()

isFirst = True
answer = 10
for i in range(1, len(dishes)):
    if dishes[i-1] == dishes[i]:
        isFirst = False
        answer += 5
    else:
        isFirst = True
        answer += 10

print(answer)