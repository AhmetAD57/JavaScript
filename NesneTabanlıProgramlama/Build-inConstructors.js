str1="Deneme";

str2= new String("Deneme");

String.prototype.repeat= string.prototype.repeat || function (n){ //Eğer repeat adına metod yoksa bu metot çalışır
    return Array(n+1).join(this);
}


console.log(str1);
console.log(typeof str1);

console.log(str2.repeat(2));
console.log(typeof str2);

