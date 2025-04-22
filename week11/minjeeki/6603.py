choice_num = 6

def back_tracking(idx, cnt):
    # 종료 조건
    if (cnt == choice_num):
        print(*answer)
        return
    # 백트래킹 종료 조건
    if k - idx < choice_num - cnt:
        return
    # 재귀
    for i in range(idx, k):
        answer[cnt] = lstS[i]
        back_tracking(i + 1, cnt + 1)

while True:
    line = list(map(int, input().split()))
    if line[0] == 0:
        break
    k, *lstS = line
    answer = [0] * choice_num
    back_tracking(0, 0)
    print()

# itertools 사용
# from itertools import combinations

# while True:
#     line = list(map(int, input().split()))
#     if line[0] == 0:
#         break
#     k, *lst = line
#     for comb in combinations(lst, 6):
#         print(*comb)
#     print()