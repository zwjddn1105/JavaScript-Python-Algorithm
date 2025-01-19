# 그리디 문제인데 heapq쓰면 더 쉽게 풀 수 있다고는 하네요..

def solution(food_times, k):
    food_times_table = [(time, table_number+1) for table_number, time in enumerate(food_times)]
    food_times_table.sort() # time순으로 정렬

    total = 0
    length = len(food_times)
    pre = 0
    complete = 0

    for now, table_number in food_times_table:
        now_time = (now-pre) * (length-complete) 
        
        if total + now_time > k:
            remain = food_times_table[complete:]
            remain.sort(key=lambda x: x[1])
            idx = (k - total) % len(remain)
            return remain[idx][1]

        total += now_time
        complete += 1
        pre = now
    
    # 먹을게 없을 때
    answer = -1
    return answer

print(solution([3,1,2], 5))