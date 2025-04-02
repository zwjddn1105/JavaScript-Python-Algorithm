import sys
sys.setrecursionlimit(10**6)

preorder = []

while True:
    try:
        preorder.append(int(input()))
    except:
        break


def postorder(start, end):
    if start > end:
        return
    
    mid = end + 1
    for i in range(start+1, end+1):
        if preorder[i] > preorder[start]:
            mid = i
            break

    postorder(start+1, mid-1) # 왼쪽
    postorder(mid, end) # 오른쪽
    print(preorder[start]) # 루트

postorder(0, len(preorder)-1)