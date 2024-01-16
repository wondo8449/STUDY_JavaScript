// 프로토타입
function User(id, pw, name, age){
    this.id = id;
    this.pw =pw;
    this.name = name;
    this.age = age||1;
    this.intro = function(){
        with(console){
            log(this.id);
            log(this.pw);
            log(this.name);
            log(this.age);
        }
    }
}

han = new User('hde1234', '1234', '한동석', 20);
hong = new User('hgd1234', '4444', '홍길동', 40);
han.intro();
hong.intro();

console.log(JSON.stringify(han));
console.log(JSON.parse(`{"id":"hde1234","pw":"1234","name":"한동석","age":20}`).id);