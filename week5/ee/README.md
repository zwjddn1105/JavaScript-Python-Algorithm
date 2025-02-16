# 5주차

## 백준 14500 테트로미노

모든 경우의 수를 다 배열로 정해놓고 반복문으로 돌았는데 풀면서도 이게 맞나 싶긴 했어요..
아무리 생각해도 브루트 포스 같아서 킵고잉 하긴 했는데 다 풀어놓고서도 이게 맞나 싶긴 하네요 (^ ㅁ ^ )> ;;

### [Python 풀이](테트로미노.py)

### [JavaScript 풀이](테트로미노.js)

## 백준 10845 큐

파이썬으로는 이전에 풀었길래 자스로만 풀었습니다

### [JavaScript 풀이](큐.js)
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

