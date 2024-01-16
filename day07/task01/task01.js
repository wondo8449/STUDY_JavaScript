let tempTr;
let temp;
let check = false;
const button = document.querySelector("input[type='button']");

button.addEventListener("click", function(){
    const input = document.getElementById("input").value; // .value 이해 안됨
    const trs = document.querySelectorAll("tbody tr");
    let check = false;

    if(tempTr){
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = temp;
    }

    trs.forEach(tr => {
       let td = tr.firstElementChild;
       if(td.innerHTML == input){
            if(tempTr){
                tempTr.style.background = "#fff";
                tempTr.firstElementChild.innerHTML = temp;
            }
            tempTr = tr;
            temp = td.innerHTML;

            tr.style.background = "#ef5350";
            td.innerHTML = "ㅇ" + td.innerHTML;
            check = true;
       }
    });

    if(!check){
        alert("다시 시도해주세요");
    }
});