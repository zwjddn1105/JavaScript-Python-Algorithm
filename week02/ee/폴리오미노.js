// 폴리오미노

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let answer = input.replace(/XXXX/g, 'AAAA').replace(/XX/g, 'BB');

console.log(answer.split('').includes('X') ? -1 : answer)

// 이 문제를 파이썬으로 먼저 풀고 검색을 해봤었는데 
// 새까맣게 잊고 있었던 replace함수로 풀더라구요 ~~~

// 그래서 자스에도 replace가 있나 검색해봤는데 자스에도 있었고
// 문자열 내의 모든 단어를 치환하려면 정규식을 같이 써야한다고 합니다

// 정규식을 사용하는 방법: /패턴/플래그;
// 슬래시로 패턴을 감싼 뒤에 플래그를 끝에 추가해주는 형태
// 대표적인 플래그: i(대소문자 구별하지 않고 검색), g(문자열 내의 모든 패턴 검색)
// 패턴: 매칭하여 검색하고 싶은 문자열을 지정하는 것