let obj={
    name: "Cat",
    color: "Blue",
    dataOfBird: 1990,
    calculateAge: function(){
        this.age = 2020 -  this.dataOfBird //Obje içinde var olan bir key e erişmek için this kullanılır.
    }
}

console.log(obj.name);
console.log(obj["color"]);

//Normalde olmayan age keyi  ilgili metot çalıştırıldıktan sonra oluşur ve direk çağırılabilir. this kullanılmak zorunda.
obj.calculateAge();
console.log(obj.age);

//Alternatif
let obj2 = new Object();
obj2.name ="Alien";
obj2.color ="Red";

console.log(obj2);
console.log(obj2.name);
console.log(obj2["color"]);