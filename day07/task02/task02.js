String.prototype.map = Array.prototype.map;
String.prototype.slice = Array.prototype.slice;
document.getElementById("change").onclick = changeHangle;

function changeHangle(number){
    let hangle = "공일이삼사오육칠팔구";
    let result;

    let isInteger = number.filter(v => v == '.').length == 0;

    number = number.slice(0, 2) == '0.' ? number.slice(1) : number;

    if(isNaN(number)){
        result = '숫자만 입력해주새요';
    } else {
        result = (number.charAt(0) == '.' ? "영" : "") + number.map(v => v == "." ? '점' : hangle.charAt(v)).join("");
    }


    return result;
}

function getResult(){
    const input = document.getElementById("input");
    document.getElementById("result").innerHTML = changeHangle(input.value);
}