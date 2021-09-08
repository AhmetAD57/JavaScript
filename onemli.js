//Metod gelen parametre sayma

function test(a, b){
    console.log(a);
}

console.log("Metod parametre sayısı: "+test.length);


//Dizi kopyalama

var Arr=["Cat", "dog", "duck"]
console.log("Arr: "+ Arr);

var x=Arr;//dizi adresi aktarılı her hangi birindeki değişim her ikisinide etkiler

x.push("Cow");
console.log("x:"+ x);




var ArrCopy=[... Arr];
ArrCopy.push("Eagel")
console.log("Arr Copy: "+ ArrCopy);

Arr.push("Mouse");
console.log("Arr : "+ Arr);
console.log("x : "+ x);