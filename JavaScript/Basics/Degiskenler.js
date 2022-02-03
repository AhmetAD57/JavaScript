console.log("Merhaba");
console.log("1234");
console.log(true);
console.log([1, 2, 3]);
console.error("Hata oluştu");
console.warn("bir uyarı oluştu");
console.clear();
console.table({name: "Cat", Color: "Green"});
console.time("id");
//Kodlar
console.timeEnd("id");

//Deneme

/* 
Deneme1
*/

console.clear();

//Veri tipleri

//Primitive
//Number, String, Boolean, Undefined, Null

let age =30;
let newAge =age;
age = 35;

console.log(age, newAge); //newAge değişmez. Veriler direk değişkene atanır.

//Non primitive(Referans tip)
//Object, Array, Function

let arr =["Cat", "Dog", "Lion"];
let newArr = arr;
arr.push("Fish");

console.log(arr, newArr); //newArr değişir. Değişkenlere verilerin adresleri atanır. Değişkenler arası atama durumunda atanan adresdir ve herangi birindeki değişim diğerinide değiştirir.



//Değişkenler

var age;
console.log(age);
age = 20;
console.log(age);

var fullname = "Deneme";
console.log(fullname);

// var, let, const

let city = "Deneme1";
console.log(city);

const email = "Deneme2";
console.log(email);

//Hata değişmez
email = "Deneme3";
console.log(email);

//Değişken tipleri

// Primitive Types

//String
let firstname = "Deneme";

//Number
let age = 20;
let money = 100.5;

//Boolean
let isActive = false;

//Null
let job = null;

//Undefined
let car;
console.log(typeof car);

// Reference Types - Objects

//Array
let names = ["Ali", "Ahmet", "Can"];

//Object
let address = {
  city: "Deneme",
  County: "Deneme1",
};

//function
let calculateAge = function () {
  return 0;
};
console.log(typeof calculateAge);

// Tür dönüşümü

let val;

// Number to string
val = String(10);

//Bool to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1, 2, 3, 4]);

//toString()
val = (10).toString();
val = false.toString();

//String to number
val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1, 2, 3, 4]);

//parseInt
val = parseInt("10");
val = parseInt("10.5");
//parseFloat
val = parseFloat("10.5");

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
