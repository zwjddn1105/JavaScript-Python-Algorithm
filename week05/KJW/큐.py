from collections import deque
n = int(input())
q = deque()

for _ in range(n):
    data = input().split()
    if len(data) == 2:
        q.append(data[1])
    else:
        if data[0] == 'pop':
            if q:
                result = q.popleft()
                print(result)
            else:
                print(-1)
        elif data[0] == 'size':
            print(len(q))
        elif data[0] == 'empty':
            if q:
                print(0)
            else:
                print(1)
        elif data[0] == 'front':
            if q:
                print(q[0])
            else:
                print(-1)
        elif data[0] == 'back':
            if q:
                print(q[len(q)-1])
            else:
                print(-1)