// 자바스크립트의 함수는 함수를 리턴할 수 있음
function calculator(n1 ,n2) {
    function add() {
        return n1 + n2;
    }
    return add;
}