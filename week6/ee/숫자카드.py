import sys
sys.stdin = open('10815.txt')

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
nums = list(map(int, input().split()))

cards.sort()
def binary_search(num):
    start = 0
    end = N-1

    while start <= end:
        mid = (start + end) // 2

        if cards[mid] == num:
            return 1
        
        elif cards[mid] > num:
            end = mid - 1
        else:
            start = mid + 1            
    return 0

ans = []
for num in nums:
    ans.append(binary_search(num))

print(*ans)
