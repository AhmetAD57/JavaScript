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
let hello3 = (_) => {
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

//Callback ve higher order functions

//Bir fonksiyona başkabir fonksiyonu parametre olarak verilmesidir.

let val;

function Multiplebytwo(a, b, c, callback) {
    var ary = [];
    for (var i = 0; i < 3; i++) ary[i] = callback(arguments[i] * 2); //Fonksiyonun signature larını alır
    return ary;
}

//callback function
function addone(a) {
    return a + 1;
}

//val= Multiplebytwo(5, 10, 20, addone);

//Higher order function: Parametre olarak fonksiyon alan ve/veya fonksiyon döndüren fonksiyonlardır.
val = Multiplebytwo(5, 10, 20, addone);

// val = Multiplebytwo(5, 10, 20, function (a) {
//     return a + 1;
// });

console.log(val);

//first class function
const foo = function () {
    console.log("foobar");
};
foo();

//Array helpers
//Geriye kopya döndürür ana yapıyı bozmas

//Map
//İstenilen özelliklerde yeni bir array döndürür.

const nums = [1, 2, 3, 4, 5, 6];
nums.push(7); //Adres değeri değişmediği için nums const olsabile ekleme yapar.
const newNums = nums.map((num) => {
    return num * 2;
});

//Filter
// İstenilen özelliklere göre filtreleme yaparak geriye döndürür.
const cars = [
    { id: 1, test: "a" },
    { id: 2, test: "b" },
    { id: 3, test: "a" },
];

let aCars = cars.filter((car) => car.test === "a");

//Find
//Eşleşen ilk elemanı geri döndürür.
let car = cars.find((car) => car.id === 1);

//Ever
//Tüm elemanlar koşulu sağlıyorsa ture sağlamıyorsa false döndürür
let result = cars.every((car) => car.id > 1);

//Some
//Bir eleman bile koşulu sağlıyorsa ture döndürür.
let result = cars.some((car) => car.id > 1);

//Reduce
// Initail value ya göre istenilen özelliklerle prev value ile initial value yu işleme katar ve prev valuya atat(Indirger, azaltır)
let arr = [1, 2, 3, 4, 5];
                        //prew, currVal, currIndex
const result = arr.reduce((sum, curr, index) => {
    return sum = sum + curr;
}, 0/*initial value*/);

//Map with reduce
const newArrMap = arr.reduce((prevArr, currNum) => {
    prevArr.push(currNum * 2);
    return prevArr;
}, [])

//Filter with reduce
const newArrFilter = arr.reduce((prevArr, currNum) => {
    if(currNum > 1)
        prevArr.push(currNum * 2);
    
    return prevArr;
}, [])

//Find with reduce
const newArrFind = arr.reduce((prevArr, currNum, index) => {
    if(currNum === 1)
        return currNum;
    else
        return prevArr
}, undefined)


//Array helper Chaining 

const result = arr.filter(item => item % 2 !==0).map(item => item*item).reduce((preSum, currItem) => currItem > 10 ? preSum = preSum + currItem : preSum, 0);