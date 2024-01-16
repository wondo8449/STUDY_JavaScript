var user = new Object();
user.userID = 'hds1234';
user.uesrPw = '1234';
user.uesrAddress = '문래역';

console.log(user);

user.info = 
function info(){
    console.log(this.userID + "입니다.");
}

user.info();