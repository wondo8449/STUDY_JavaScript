let file = require("fs");
let user = new Object();

user.name = "한동석";
user.id = "hsd1234";
user.pw = "1234";

let userJSON = JSON.stringify(user);

file.writeFile('user.json', userJSON, 'utf-8', function(e){
    console.log(e ? e : "출력성공");
});

file.readFile('user.json', 'utf-8', function(e, content){
    if(e){
        console.log(e);
    }else{
        let user = JSON.parse(content);
        console.log(user);
        console.log(user.name);
    }
})