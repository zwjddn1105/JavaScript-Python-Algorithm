import sys
sys.stdin = open("input.txt")

N = int(input())
arr = [0] * 27

for _ in range(N):
    arr[ord(input()[0])-96] += 1

answer = []
for i in range(1, 27):
    if arr[i] >= 5:
        answer.append(chr(i+96))

if len(answer):
    answer.sort()
    print("".join(answer))
else:
    print("PREDAJA")