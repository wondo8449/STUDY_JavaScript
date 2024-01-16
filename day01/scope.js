var x; // 전역변수

function f(){
    var y; // 지역변수
    var x = 20; // 지역변수
    y = 10; // 지역변수
    z = 30; // 전역변수
}

f();

console.log(z);