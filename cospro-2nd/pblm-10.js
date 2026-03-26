// ** 헷갈리는 문제 **
// 메모:
// 순차적으로 돌면서 가장 최솟값을 구한다.
// 중요한 점은 갔던 곳은 다시 가면 안되기 때문에 갔던 흔적을 남겨야 한다.
// for문을 중첩으로 해야하나? 생각할 수 있는데, 재귀 함수로 다시 불러들이면 된다.
// 그리고 예를 들어 1번->3번으로 간 이후의 경우를 다 봤다면, 다시 1번으로 돌아와야 한다.
function solution(arr, N) {
  let minHealth = Infinity;
  let visited = new Array(N).fill(false);

  // now: 현재 위치한 방, count: 탐색한 방의 수, totalHealth: 누적 체력
  function dfs(now, count, totalCost) {
    if (count === N) {
      if (arr[now][0] !== 0) {
        minHealth = Math.min(minHealth, totalCost + arr[now][0]);
        return;
      }
    }

    for (let next = 0; next < N; next++) {
      if (!visited[next] && arr[now][next] !== 0) {
        visited[next] = true;
        dfs(next, count + 1, totalCost + arr[now][next]);
        visited[next] = false;
      }
    }
    return;
  }

  visited[0] = true;
  dfs(0, 1, 0);

  return minHealth;
}

// 아래는 테스트케이스 출력을 해보기 위한 코드입니다.
const arr1 = [
  [0, 25, 7, 56, 12],
  [4, 0, 31, 88, 45],
  [62, 19, 0, 71, 23],
  [95, 36, 51, 0, 44],
  [16, 41, 66, 73, 0],
];
const N1 = 5;
const ret1 = solution(arr1, N1);
console.log("solution 함수의 반환 값은", ret1, "입니다.");

const arr2 = [
  [0, 11, 24, 98, 46],
  [53, 0, 29, 62, 75],
  [82, 36, 0, 5, 18],
  [42, 54, 33, 0, 21],
  [9, 54, 92, 86, 0],
];
const N2 = 5;
const ret2 = solution(arr2, N2);
console.log("solution 함수의 반환 값은", ret2, "입니다.");

const arr3 = [
  [0, 18, 34, 22],
  [48, 0, 55, 61],
  [18, 7, 0, 15],
  [71, 86, 94, 0],
];
const N3 = 4;
const ret3 = solution(arr3, N3);
console.log("solution 함수의 반환 값은", ret3, "입니다.");
