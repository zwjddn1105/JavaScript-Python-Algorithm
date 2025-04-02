# [🔗 백준 14500 테트로미노](https://www.acmicpc.net/problem/14500)

모든 경우의 수를 다 배열로 정해놓고 반복문으로 돌았는데 풀면서도 이게 맞나 싶긴 했어요..
아무리 생각해도 브루트 포스 같아서 킵고잉 하긴 했는데 다 풀어놓고서도 이게 맞나 싶긴 하네요 (^ ㅁ ^ )> ;;

## [Python 풀이](테트로미노.py)

## [JavaScript 풀이](테트로미노.js)

<br>

# [🔗 백준 10845 큐](https://www.acmicpc.net/problem/10845)

파이썬으로는 이전에 풀었길래 자스로만 풀었습니다

## [JavaScript 풀이](큐.js)
저는 Switch문을 사용해서 풀었는데 검색해보니 객체를 사용하는 방법이 가독성이 더 좋아보여서 긁어왔어요 

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const queue = [];
const ans = [];

const commands = {
  pop: () => queue.length ? queue.shift() : -1,
  size: () => queue.length,
  empty: () => queue.length ? 0 : 1,
  front: () => queue.length ? queue[0] : -1,
  back: () => queue.length ? queue[queue.length - 1] : -1
};

input.slice(1).forEach(cmd => {
  const [command, num] = cmd.trim().split(' ');
  if (command === 'push') {
    queue.push(Number(num));
  } else {
    ans.push(commands[command]());
  }
});

console.log(ans.join('\n'));
```

### 💡 객체의 프로퍼티에 접근하는 방법

객체의 프로퍼티에 접근 *(여기서는 함수를 실행)* 하는 방법에는 두 가지가 있음

#### 1. 점 표기법 (dot notation)

- 점(`.`)을 이용해 객체 프로퍼티에 접근하는 방식 
- `객체.프로퍼티`

```js
console.log(commands.pop());
```

- 하지만 이 방법은 변수를 이용한 동적 접근이 불가능함

```js
const cmd = 'pop';
commands.cmd(); // 오류 발생!!
```

#### 2. 대괄호 표기법 (bracket notation)

- 대괄호(`[]`)를 이용해 프로퍼티에 접근하는 방식 
- `객체["프로퍼티"]`

```js
console.log(commands['pop']());
```

- 대괄호 표기법을 이용하면 **문자열 변수를 활용하여 프로퍼티에 동적으로 접근**할 수 있음

```js
const cmd = 'pop';
console.log(commands[cmd]());
```

- 또한 대괄호 표기법을 이용하면 **특수문자나 공백이 포함된 이름의 프로퍼티**에 접근하는 게 가능 (점 표기법에서는 불가능) 


<br>

# [🔗 프로그래머스 가장 큰 수](https://school.programmers.co.kr/learn/courses/30/lessons/42746)

