# 백준 10828 - 스택
# 시간초과 ... 나중에 다시 풀겠습니다 ..............................

# 명령어 개수 입력 받기
n = int(input())
# 스택 초기화
stack = []

# 각 명령어 처리
for _ in range(n):
   command = input().split()
   
   if command[0] == 'push':
       # 정수 X를 스택에 넣기
       stack.append(int(command[1]))
       
   elif command[0] == 'pop':
       # 스택에서 가장 위에 있는 정수를 빼고 출력
       # 스택이 비어있으면 -1 출력
       print(-1 if not stack else stack.pop())
       
   elif command[0] == 'size':
       # 스택에 들어있는 정수의 개수 출력
       print(len(stack))
       
   elif command[0] == 'empty':
       # 스택이 비어있으면 1, 아니면 0 출력
       print(1 if not stack else 0)
       
   elif command[0] == 'top':
       # 스택의 가장 위에 있는 정수 출력
       # 스택이 비어있으면 -1 출력
       print(-1 if not stack else stack[-1])