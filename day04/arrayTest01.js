// var datas = [];
// datas[0] = 10;

// console.log(datas);

// datas[3] = 20;
// console.log(datas);

var datas = [20, 5, 6, 12, 10];
datas.push(19);
console.log(datas);

console.log(datas.join(":"));

console.log(datas.slice(1,3));
console.log(datas.slice(1));

datas.forEach(function(v){console.log(v)});
datas.forEach(function(v, i, ar){
    ar[i] = v* v;
});
console.log(datas);
console.log(datas.indexOf(100));

datas.map(function(v){return v *2}).forEach(function(v, i, ar){datas[i] = ar[i]});
console.log(datas);

datas = datas.filter(function(v){return v % 10 == 0});
console.log(datas);

var ar = new Array(10);
console.log(ar.length);
ar = new Array("월", "화", "수");
ar.length = 2;
console.log(ar);