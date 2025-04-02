# 설치, 제거 조건 확인
def check(answer):
    for x, y, a in answer:
        # 기둥일 경우
        # 바닥이 아닐 경우, 아래에 기둥이 있는 경우, 왼쪽에 보가 있는 경우, 오른쪽에 보가 있는 경우
        if a == 0:
            if y != 0 and [x, y-1, 0] not in answer and  [x-1, y, 1] not in answer and [x, y, 1] not in answer:
                return False
        # 보일 경우
        # 왼쪽 끝이 기둥 위에 있는 경우, 오른쪽 끝이 기둥 위에 있는 경우, 양쪽이 다른 보와 연결된 경우
        else:
            if [x, y-1, 0] not in answer and [x+1, y-1, 0] not in answer and not ([x+1, y, 1] in answer and [x-1, y, 1] in answer):
                return False

    return True

# 설치, 제거하기
def solution(n, build_frame):
    answer = []

    for x, y, a, b in build_frame:

        # 설치할 때
        if b == 1:
            answer.append([x, y, a])

            if not check(answer):
                answer.remove([x, y, a])

        # 제거할 때
        else:
            answer.remove([x, y, a])

            if not check(answer):
                answer.append([x, y, a])

    # x -> y -> a 순으로 오름차순 정렬
    answer = sorted(answer, key=lambda x: (x[0], x[1], x[2]))
    
    return answer