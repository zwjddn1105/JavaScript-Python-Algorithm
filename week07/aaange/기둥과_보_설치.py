def can_build(x, y, a, structures):
    # 기둥(0) 또는 보(1) 설치가 가능한지 확인
    if a == 0: # 기둥 설치 여부 판단
        # 1. 바닥 위에 있는 경우
        if y == 0:
            return True
        # 2. 아래에 다른 기둥이 있는 경우
        if (x, y-1, 0) in structures:
            return True
        # 3. 현재 위치에 보가 있는 경우
        if (x, y, 1) in structures:
            return True
        # 4. 왼쪽에 보가 있는 경우
        if (x - 1, y, 1) in structures:
            return True
        # 위 조건 중 하나라도 만족하지 않으면 설치 x
        return False
    elif a == 1: # 보 설치 여부 판단
        # 1. 한쪽 끝이 기둥 위에 있는 경우
        if (x, y-1, 0) in structures:
            return True
        if (x + 1, y - 1, 0) in structures:
            return True
        # 2. 양쪽 끝이 다른 보와 연결된 경우
        if (x-1, y, 1) in structures and (x+1, y, 1) in structures:
            return True
        # 위 조건 중 하나도 만족하지 않으면 설치 x
        return False

def can_remove(structures):
    # 삭제가 가능한지 확인
    for x, y, a in structures:
        if not can_build(x, y, a, structures):
            return False
    return True

def solution(n, build_frame):
    structures = set() # 기둥과 보를 저장하는 집합

    for x, y, a, build in build_frame:
        if build == 1: # 설치
            if can_build(x, y, a, structures):
                structures.add((x, y, a))
        else: # 삭제
            structures.remove((x, y, a))
            if not can_remove(structures): # 삭제 후 구조가 무너지면 복구
                structures.add((x, y, a))
    
    # 결과를 정렬하여 반환
    return sorted(list(structures))