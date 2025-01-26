import sys
sys.stdin = open("input.txt")

arr = list(input())

cnt = 0
board = [' ']*len(arr)

for i in range(len(arr)):
    if (arr[i] == 'X'):
        cnt += 1
    elif (arr[i] == '.'):
        board[i] = '.'

    if cnt == 4:
        for j in range(i-3, i+1):
            board[j] = 'A'
        cnt = 0
    elif arr[i] == '.' and cnt == 2:
        for j in range(i-2, i):
            board[j] = 'B'
        cnt = 0
    elif arr[i] == '.' and (cnt == 1 or cnt == 3):
        board = ['-1']
        cnt = 0
        break
    # print(board)
    # print(cnt)
else:
    i = i+1 # 마지막에서 인덱스값을 +1을 안 해줘서 계속 틀렸었다
    if cnt == 4:
        for j in range(i-3, i+1):
            board[j] = 'A'
    elif cnt == 2:
        for j in range(i-2, i):
            board[j] = 'B'
    elif cnt != 0:
        board = ['-1']

print(''.join(board))