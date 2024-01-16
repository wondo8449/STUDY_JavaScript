let productJSON = `{"name": "마우스", "price": 17000}`;
let product = JSON.parse(productJSON);
console.log(product.name);
console.log(product.price);
productJSON = JSON.stringify(product);
console.log(productJSON);