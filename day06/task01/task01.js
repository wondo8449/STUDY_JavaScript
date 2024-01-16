const input = document.getElementsByName("select");
const button = document.querySelector("button");

input.addEventListner()

button.addEventListner("click", function(){
    switch(input.innerHTML){
        case "아동" :  
            document.getElementById("child").backgoundcolor = "red";
        case "청소년" :
            document.getElementById("student").backgoundcolor = "red";
        case "성인" :
            document.getElementById("adult").backgoundcolor = "red";
    }
})