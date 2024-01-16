// 1~100까지 Array 객체에 담은 후 짝수만 출력
// var datas = new Array(100).fill();
// // JS 화살표 연산자 사용 시 여러 개의 매개변수를 전달했을 경우 반드시 익명함수 소괄호를 작성해야 한다.
// datas.forEach((v, i, ar) => {
//     ar[i] = i+1;
// });

// console.log(datas.filter(v => v % 2 == 0));

// 한글을 숫자로 변경
// 입력 예) 일공이사
// 출력 예) 1024
var hangle = "공일이삼사오육칠팔구";
var input = "일공이사".split("");
console.log(input.map(v => hangle.indexOf(v)).join(""));

// 숫자를 한글로 변경
// 입력 예) 1024
// 출력 예) 일공이사
var hangle = "공일이삼사오육칠팔구";
var input = "1024".split("");
console.log(input.map(v => hangle.charAt(v)).join(""));

// 1~100까지 합 출력
var datas = new Array(100).fill().map((v, i) => i + 1);
var result = 0;

datas.forEach(v => result += v);
console.log(result);