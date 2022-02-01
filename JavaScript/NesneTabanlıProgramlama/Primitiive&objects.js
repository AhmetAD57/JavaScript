var a=10;
var b=a;

console.log(a);
console.log(2);

obj1={
    name:'Deneme',
    age: 10
}

var obj2=obj1; //Objelerde veriler adres olarak saklandığı için hangi obje değiştirilirse değiştirilsin hepsi için verilerde güncellenir
obj1.age=12;

console.log(obj2.age);

console.log(obj1.age);