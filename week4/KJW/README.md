# 4주차

## 자바스크립트 문법 중간정리

### 입력

```js
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
```

자바스크립트 코테는 빈 공백으로 주어질 때도 있으므로 세줄 통째로 외우기

이 상태에서 input 출력은 배열로 묶이지 않고 나옴

---

### 배열의 map함수

배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

```js
let arr = [1, 2, 3];
const mapResult1 = arr.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // [2,4,6]
```

파이썬의 map은 map(int, input().split()) 이런형태

---

### max, min값 구하기

```js
Math.max(...배열);
Math.min(...배열);
```

max와 min 함수는 배열채로 넣으면 최대, 최소값 안구해줌, 스프레드 연산자로 풀어서 넣어야함

---

### 배열의 includes함수

```js
let arr = [1, 2, 3];
let isInclude = arr.includes(3);
console.log(isInclude); // true, 존재하는게 아니라면 false
```

파이썬에 in으로 확인하는 것이 있다면, js에서는 includes를 활용

---

### 배열의 길이구하기

- 파이썬: len()
- js: 배열이름.length
- 자바스크립트에서는 () 넣지 않는다는 것 기억하기

---

### 정렬하기

- 파이썬: sort() 메서드 -> 원본배열 정렬
- 파이썬: sorted() 메서드는 기존의 것을 정렬하는 것이 아닌 새로운 배열 반환
- js: sort() -> 원본배열 정렬
  숫자가 문자형으로 되어있을 때에 잠정적 형변환이 일어나지 않음, 숫자로 형변환 한 후에 정렬해야함

```js
오름차순순;
arrA.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

내림차순순;
arrB.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
```

- js: toSorted -> 새로운 배열 반환

```js
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // [c,a,b]
console.log(sorted); // [a,b,c]
```

---

### 몫 구하기

- Math.floor() 함수 활용 -> 소수점 내림 하는 함수
- Math.ceil() 은 소수점 올림 하는 함수

---

### 객체의 키값만 모아보기

- Object.keys(객체이름) -> 배열로 반환됨

---

### 문자열의 repeat함수

- '문자열'.repeat(n) -> 문자열이 n번반복

---

### Array().fill() 기능

- Array(n).fill(m) -> 길이가 n인 배열을 m으로 채워서 반환
- 파이썬에서 visited = [false] \* n 이런거 생각

---

​
