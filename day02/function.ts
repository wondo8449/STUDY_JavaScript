// function add(num1 ,num2, num3) {
//     return num1 + num2 + num3;
// }

// function add(num1 ,num2) {
//     return num1 + num2;
// }

// console.log(add(1, 3));

// function add(...args){
//     var total = 0;
//     for(let i=0; i<args.length; i++){
//         total += args[i];
//     }
//     return total;
// }

function intro(name :string, ...args: any[]) {
    console.log("이름: " + name);
    for(let i=0; i<args.length; i++){
        console.log("기타정보: " + args[i]);
    }
}

intro("김예찬", 20, "전주")