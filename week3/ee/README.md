# [백준준 10828] 스택 - js, py
## 삼항연산자
JavaScript|Python
----------|--------
 `조건 ? : 참값 : 거짓값`|`참값 if 조건 else 거짓값`

JavaScript에서 쓰던 삼항연산자에 어느새 익숙해져서 파이썬도 물음표를 써서 삼항연산자를 쓰는 줄 알았는데 아니었음 ..

## 배열의 길이
JavaScript|Python
----------|--------
`arr.length`|`len(arr)`

- 자바스크립트에서는 배열의 길이가 배열의 속성(property)이다.
- 파이썬에서는 `len()`이라는 내장함수를 사용한다.

## 스택 구현하기

자바스크립트와 파이썬 모두 배열(리스트)을 사용하여 구현한다.

### 추가
JavaScript|Python
----------|--------
`stack.push(1)`|`stack.append(1)`

### pop
JavaScript|Python
----------|--------
`stack.pop()`|`stack.pop()`

### peek/top
JavaScript|Python
----------|--------
`stack[stack.length-1]`|`stack[-1]`

- 파이썬에서는 당연하게 썼던 음수 인덱스를 사용하지 못한다. ㅠㅠ

