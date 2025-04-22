const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function lotto(input) {
  const result = []; // 결과 출력 배열

  for (let line of input) {
    // 입력받은 값을 한 줄씩 처리
    const arr = line.split(" ").map(Number);

    const k = arr[0]; // k의 값
    const nums = arr.slice(1); // 숫자 배열

    if (k === 0) {
      // k가 0이면 입력 끝 (문제 조건)
      break;
    }

    const temp = []; // 6개가 될 때까지 담아놓는 임시 배열

    // 숫자 고르는 함수 (백트래킹)
    // start -> 인덱스
    function chooselotto(start) {
      // 숫자 6개 골랐으면 공백으로 연결해서 result 배열에 넣기
      if (temp.length === 6) {
        result.push(temp.join(" "));
        return;
      }

      // 현재 위치부터 끝까지
      for (let i = start; i < nums.length; i++) {
        temp.push(nums[i]); // 현재 숫자 temp에 추가
        chooselotto(i + 1); // 다음 인덱스로 로또 고르기기
        temp.pop(); // 방금 추가한 숫자 제거하고 그 다음 경우의 수 탐색
      }
    }

    chooselotto(0); // 0부터 탐색 시작
    result.push(""); // 입력 그룹별로 줄 구분이 됨 -> 줄 추가
  }

  console.log(result.join("\n")); // result의 모든 값을 줄바꿈으로 출력
}

lotto(input);
