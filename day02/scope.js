// var x;
// global.x;
// window.x;
// this.x;
globalThis.x;

function f() {
    var x;
    // global.x = 10;
    // 변수 사용시 가까운 스코프부터 찾는다
    // 따라서 함수 안에 사용된 x는 지역변수이다
    // window.x = 10;
    // this.x = 10;
    globalThis.x = 10;
}

f();

console.log(x);