function add(num1, num2, callback){
    // 조건식에서 false로 취급되는 값 : 0, "", undefined
    if(callback){ // callback에 함수가 전달되었다면(undefined가 아니라면)
        callback(num1 +num2); // 전달받은 함수를 사용하면서 매개변수에 현대 함수의 결과를 전달한다
        return;
    }
    // 만약 callback함수가 전달되지 않았다면 두 정수의 덧셈 결과를 리턴해준다
    return num1 + num2;
}

add(3, 5, function(result){
    console.log(result / 2);
});

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다
// 3. A함수는 B함수를 callback함수로 전달받는다