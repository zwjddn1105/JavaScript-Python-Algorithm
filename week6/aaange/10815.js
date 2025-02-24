`
- 분류 : 자료 구조, 정렬, 이분 탐색, 해시를 사용한 집합과 맵
- 성능 요약
    - 메모리 : 116216 KB
    - 시간 : 756 ms
- 제출 일자 : 2025-02-20 21:14
`

const fs = require('fs');

// 입력 데이터 읽기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const SG_list = input[1].split(' ').map(Number).sort((a, b) => a - b);
const M = Number(input[2]);
const check_list = input[3].split(' ').map(Number);

// 이진 탐색 함수
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return 1;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return 0;
}

// 결과 출력
const result = check_list.map(num => binarySearch(SG_list, num));
console.log(result.join(' '));
