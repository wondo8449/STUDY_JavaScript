var user ={name: '한동석', age: 20};
var userJSON =JSON.stringify(user);

console.log(userJSON);

console.log(JSON.parse(userJSON).age);