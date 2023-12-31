// 자바스크립트의 함수는 함수를 리턴할 수 있음
function calculator(n1 ,n2) {
    function add() {
        return n1 + n2;
    }
    // 함수 자체를 리턴하는 케이스, 11이 나올 것 같지만, closure 변수는 add 함수만 불러온다.
    return add;
    
    // 함수를 호출한 결과를 리턴하는 케이스
    // return add();
}

// add() 11 response
// const closure = calculator(5, 6);
// console.log(closure); // -> [Function: add]   |   11 
// console.log(typeof(closure)); // -> function  |   number

function getVisitor() {
    let visitCount = 0;
    function coutnVisitor() {
        return ++visitCount;
    }
    // 클로저 미적용
    // return coutnVisitor();
    // 클로저 적용
    return coutnVisitor;
}

// 클로저 미 적용 코드 (getVisitor() 호출 시 마다 visitCount가 0으로 초기화 됨)
// const countVisitor1 = getVisitor();
// console.log(countVisitor1); // 1
// const countVisitor2 = getVisitor();
// console.log(countVisitor2); // 1
// const countVisitor3 = getVisitor();
// console.log(countVisitor3); // 1

// 클로저 적용 코드 (getVisitor가 종료되어도 계속해서 visitCount의 값이 유지됨.)
const countVisitor = getVisitor();
console.log(countVisitor());
console.log(countVisitor());
console.log(countVisitor());