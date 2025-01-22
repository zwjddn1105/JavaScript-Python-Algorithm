"""
- 분류 : 수학, 그리디 알고리즘, 정렬
- 성능 요약
    - 메모리 : 32412 KB
    - 시간 : 40 ms
- 제출 일자 : 2025-01-22 08:30
"""

N = int(input())
list_A = list(map(int, input().split()))
list_B = list(map(int, input().split()))

list_A = sorted(list_A)
table_B = []

for B_index, B_value in enumerate(list_B):
    table_B.append((B_index, B_value))

table_B.sort(key=lambda x: x[1], reverse=True)

New_A = [0]*N

i = 0
for index in table_B:
    New_A[index[0]] = list_A[i]
    i += 1

result = 0
for idx in range(N):
    result += list_B[idx]*New_A[idx]

print(result)