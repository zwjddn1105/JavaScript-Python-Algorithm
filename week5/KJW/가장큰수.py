def solution(numbers):
    numbers = list(map(str, numbers))      
    numbers.sort(key = lambda x : x*3, reverse=True)

    answer = "".join(numbers)
    # 아오 이부분때문에
    if int(answer) == 0:
        answer = '0'
    return answer