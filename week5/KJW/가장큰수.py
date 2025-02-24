def solution(numbers):
    numbers = list(map(str, numbers))      
    numbers.sort(key = lambda x : x*3, reverse=True)

    answer = "".join(numbers)
    if int(answer) == 0:
        answer = '0'
    return answer

print(solution([3, 30, 34, 5, 9]))
print(solution([6, 10, 2]))
print(solution([0, 0, 0]))



a = '0000'
a = int(a)
print(a)