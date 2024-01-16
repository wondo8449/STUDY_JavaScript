let file = require("fs");
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let Products = new Array();
Products.push(new Product('빵', 1500, 5));
Products.push(new Product('담배', 4500, 2));
Products.push(new Product('핫도그', 3000, 5));

let productsJOSN =JSON.stringify(Products);
console.log(productsJOSN);

// file.writeFile('product.json', productsJOSN, 'utf-8', function(e){
//     console.log(e ? e : "출력성공");
// });

file.readFile('product.json', 'utf-8', function(e, content){
    JSON.parse(content).forEach(v => {
        console.log(v.name);
        console.log(v.price);
        console.log(v.stock); 
    });
});