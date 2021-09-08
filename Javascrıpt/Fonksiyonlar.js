//Function
// function yasHesapla(dogumyili)
// {
//     return 2018-dogumyili;
// }

// let ageAda=yasHesapla(2012);
// let ageYigit=yasHesapla(2010);
// let ageCınar=yasHesapla(2017);

// console.log(ageAda);
// console.log(ageYigit);
// console.log(ageCınar);

// function EmekliligeKacYilKaldi(dogumyili, isim)
// {
//     let yas= yasHesapla(dogumyili);
//     let emeklilik= 65-yas;

//     if(emeklilik>0)
//     {
//         console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
//     }
//     else
//     {
//         console.log('zaten emekli oldunuz');
//     }
// }

// EmekliligeKacYilKaldi(2012, 'Ada');
// EmekliligeKacYilKaldi(2010, 'Yiğit');
// EmekliligeKacYilKaldi(2050, 'Çınar');


//Function Declarations
// function sum(a, b)
// {
//     var c=a+b;
//     return c;
// }

//console.log(sum(10, 20));

//Function Expressions
// const sum= function(a, b)
// {
//     if(typeof a ==='undefined')
//     {
//         a=0;
//     }
//     if(typeof b ==='undefined')
//     {
//         b=0;
//     }
    
//     var c=a+b;
//     return c;
// }

//ES6 Default Parameters
// const sum= function(a=0, b=0)
// {
//     var c=a+b;
//     return c;
// }

// function sumAll()
// {
//     var total=0;

//     for(let i=0; i<arguments.length; i++)
//     {
//         total+=arguments[i];
//     }

//     return total;
// }

// console.log(sum(10, 30));
// console.log(sum(10)); //NaN
// console.log(sum(10, 30, 40, 50));
// console.log(sumAll(10, 20, 30, 10, 30));

//Windows Object
let val;
var a=10;

function abc()
{
    return 0;
}

val=window;

//alert
//alert('Merhaba');

//prompt
//val=prompt('bir sayı giriniz ');

//confirm
// val=confirm('Emin misiniz?')

// if(val==true)
// {
//     console.log('ok');
// }
// else
// {
//     console.log('no');
// }

//scroll
//val=window.scrollX;
//val=windows.scrollY;

//location
// val=window.location;
// val=window.location.href;
// val=window.location.hostname;
// val=window.location.host;
// val=window.location.protocol;
// val=window.location.search;

//window.location.href="http://google.com";
//window.location.reload();

//console.log(val);

//Scopes

//Golbal scopes
var name='Deneme';
var age=25;

function logName()
{
    var name='Deneme1';
    var age='12';
    console.log('function scope ', name, age);
} 
console.log(age);

if(true)
{
    var age=30;
    console.log('blog scope', name, age);
}
console.log(age);
logName();
console.log(name);


console.log('*****************');

if(true)
{
    var model='Opel';
    var year=2016;
    const color='White';
    console.log('blog scope', model, year, color);
}

console.log(model);
//console.log(color);

var i=1;

for(let i=0;i<10;i++)
{
    console.log('i', i);
}

console.log(i);

//Local scopes