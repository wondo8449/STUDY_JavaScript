String.prototype.map = Array.prototype.map;
String.prototype.slice = Array.prototype.slice;

// document.getElementById("change").onclick = changeHangle;
$("#change").on('click', getResult);

function changeHangle(number){
    const $div = $("#number");
    let hangle = "공일이삼사오육칠팔구";
    let result;
    let isInteger = number.filter(v => v == '.').length == 0;

    number = number.slice(0, 2) == '0.' ? number.slice(1) : number;

    $div.text(isInteger ? 3 : 2);

    if(isNaN(number)){
        result = '숫자만 입력해주새요';
        $div.text(4);
    } else {
        result = (number.charAt(0) == '.' ? "영" : "") + number.map(v => v == "." ? '점' : hangle.charAt(v)).join("");
    }


    return result;
}

function getResult(){
    // const input = document.getElementById("input");
    const $input = $("#input");
    // document.getElementById("result").innerHTML = changeHangle(input.value);
    $("#result").text(changeHangle($input.val()));
}