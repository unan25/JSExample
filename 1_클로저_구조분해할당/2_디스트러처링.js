const userNames = ['김철수', '박자스', '리액트'];

// 구조분해할당에 의한 분할 저장
const [kim, park , lee] = userNames;

console.log(`kim : ${kim}, park: ${park}, lee : ${lee}`);

// 변수값 교환하기(디스트럭처링으로 교환)
let first = 10;
let second = 20;

console.log(`교환 전 -- first : ${first}, second : ${second}`);
[second, first] = [first, second];
console.log(`교환 후 -- first : ${first}, second : ${second}`);

// 스프레드 문법은 배열 내부 요소를 개별 요소로 다시 뿌려줍니다.
// 가령 [1, 2, 3, 4, 5] 라고 저장된 배열이 있다면
// ...[1, 2, 3, 4, 5] 와 같이 ...을 배열요소 왼쪽에 붙여주면
//1, 2, 3, 4, 5 라고 풀리는 식입니다.

// 스프레드를 활용한 배열 확장
console.log("----------------------------------");
const foods = ['돈까스', '텐동', '햄버거', '수제비'];
// '피자', '초밥'을 해당 배열에 추가하는 경우, 스프레드 없이 확장하면 다음과 같다.
// [[돈까스,텐동,햄버거,수제비],피자,초밥]] 이 실제 결과물
const newFoods = [foods, '피자', '초밥'];
console.log(`추가 작업 결과물 : ${newFoods}`);