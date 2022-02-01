//Function
function yasHesapla(dogumyili) {
    return 2018 - dogumyili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCınar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCınar);

function EmekliligeKacYilKaldi(dogumyili, isim) {
    let yas = yasHesapla(dogumyili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    } else {
        console.log("zaten emekli oldunuz");
    }
}

console.log(typeof EmekliligeKacYilKaldi); //function

EmekliligeKacYilKaldi(2012, "Ada");
EmekliligeKacYilKaldi(2010, "Yiğit");
EmekliligeKacYilKaldi(2050, "Çınar");

//Function Declarations
function sum(a, b) {
    var c = a + b;
    return c;
}

console.log(sum(10, 20));

//Function Expressions
const sum = function (a, b) {
    if (typeof a === "undefined") {
        a = 0;
    }
    if (typeof b === "undefined") {
        b = 0;
    }

    var c = a + b;
    return c;
};

//ES6 Default Parameters
const sum = function (a = 0, b = 0) {
    var c = a + b;
    return c;
};

function sumAll() {
    var total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sum(10, 30));
console.log(sum(10)); //NaN
console.log(sum(10, 30, 40, 50));
console.log(sumAll(10, 20, 30, 10, 30));

//Windows Object
let val;
var a = 10;

function abc() {
    return 0;
}

val = window;

//alert
alert("Merhaba");

//prompt
val = prompt("bir sayı giriniz ");

//confirm
val = confirm("Emin misiniz?");

if (val == true) {
    console.log("ok");
} else {
    console.log("no");
}

//scroll
val = window.scrollX;
val = windows.scrollY;

//location
val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
val = window.location.search;

window.location.href = "http://google.com";
window.location.reload();

console.log(val);

//Scopes

//Golbal scopes
var name = "Deneme";
var age = 25;

function logName() {
    //Local scopes
    //Global scope da aynı değişken varda function scope(Local) daki değeri kullanır, shadowed variable
    var name = "Deneme1";
    var age = "12";
    console.log("function scope ", name, age);
}
console.log(age);

if (true) {
    var age = 30;
    console.log("blog scope", name, age);
}
console.log(age);
logName();
console.log(name);

console.log("*****************");

if (true) {
    var model = "Opel";
    var year = 2016;
    const color = "White";
    console.log("blog scope", model, year, color);
}

console.log(model);
console.log(color);

var i = 1;

for (let i = 0; i < 10; i++) {
    console.log("i", i);
}

console.log(i);


//ES6 Arrow functions


let hello1 = () => console.log("hi 1"); //Tek satır için paranteze gerek yok
hello1();

//Fat arrow
let hello2 = () => {
    return "hi 2";
};
console.log(hello2());

//Parametre almadığı belirtiliyor
let hello3 = _ => {
    return "hi 3";
};
console.log(hello3());

let plus = (x, y) => {
    console.log(x + y);
};
plus(5, 2);

//Tek parametre için paranteze gerek yok
let printX = x => {
    console.log(x);
};
printX(5);

//return kullanmak için parantez olması gerekli
let multiply = (x, y) => {
    return x * y;
}; 
console.log(multiply(5, 2));

//return ve süslü parantez olmadan sonucu return edebliliyor
let multiply1 = (x, y) => x * y; 
console.log(multiply1(5, 3));

let object = (id, name) => ({
    id: id,
    name: name,
});
console.log(object(1, "Test"));

const phones = [
    { id: 1, test: "a" },
    { id: 2, test: "b" },
    { id: 3, test: "c" },
];

let arr = phones.map((phone) => phone.id);
console.log(arr);

let arr1 = phones.filter((phone) => phone.id > 1);
console.log(arr1);

//This

const user = {
    id: 1,
    name: "Test",
    roles: ["admin", "customer"],
    getRoles: function () {
        this.roles.forEach((role) => {
            console.log(role);
            console.log(this.name); //Arrow foksiyonlar içinde scope oluşturmaz bu yüzden this objesine ulaşıla bilir
        });
    },
};

user.getRoles();

const usera = () => {
    console.log(arguments); //Arrow foksiyonlar içinde scope oluşturmadıkları için arguments objesine erişemezler
};

usera();
