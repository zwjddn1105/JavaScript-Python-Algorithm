N = int(input())
X = list(map(int, input().split()))

sortedX = sorted(set(X))
idx_dict = {num: idx for idx, num in enumerate(sortedX)}

answer = [idx_dict[num] for num in X]

print(*answer)