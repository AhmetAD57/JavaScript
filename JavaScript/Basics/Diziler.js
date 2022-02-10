//Arrays
let names = ["Deneme1", "Deneme2", "Deneme3", "Deneme4"];
let years = [2017, 1999, 2012, 2010];
let mix = ["Deneme1", "Deneme2", 1983, null, undefined, ["Deneme3", "Deneme4"]];

//Get array item
console.log(names[0]);
console.log(names[3]);

//Set array item
names[names.length] = "Deneme5";

//Fazla indexe veri atandığında o indexe kadar empty alanlar oluşturulur.
names[10] = "Deneme10";

//Add item
//Sona ekler
years.push(1986);
//Başa ekler
years.unshift(1986);

//Remove item
//Sondakini siler
let item = years.pop();
//Baştakini siler
item = years.shift();
//Kaydırmadan silme yapar. o index empty olur. Index belirtmek zorunlu
delete years[0];

//Indexof
let index = names.indexOf("Deneme4");
console.log("Index: " + index);

//String array
console.log(names.toString());

//Reverse
names.reverse();

//Sort
years.sort();

//Concat
let val = years.concat(names);
console.log(val);

//Splice
console.log(names);
let removes = names.splice(0, 2, "Deneme6");

//slice
let arr = names.slice(0, 2);

function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

//Find
val = years.find(over18);

console.log(val);

//Filter
val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

let colors = ["Pink", "Orange", "White"];

console.log(colors instanceof Object); //True;
console.log(colors instanceof Array); //True;
console.log(colors instanceof Function); //False;

//Sorting

const users = [
    { id: 5, name: "Cat", age: 10 },
    { id: 12, name: "Alien", age: 15 },
    { id: 10, name: "Rabit", age: 32 },
    { id: 23, name: "Dog", age: 41 },
    { id: 32, name: "Fish", age: 8 },
    { id: 17, name: "Elephand", age: 14 },
];

//String arr a to z;
let sortedArr = names.sort();
console.log(sortedArr);
//String arr z to a;
sortedArr = names.reverse();
console.log(sortedArr);

let numArr = [5, 8, 47, 21, 48];
//Düzgün sıralamaz number için, sanki string miş gibi davranır.
console.log(numArr.sort());

//Number array sorting
const sorted = numArr.sort((a, b) => a - b); //calback pozitif, negatif yada 0 döndürür.
console.log(sorted);

//Object array sorting with id
const sortedObjectsWithId = users.sort((a, b) => a.id - b.id);
console.log(sortedObjectsWithId);

//Object array sorting with name
const sortedObjectsWithName = users.sort((a, b) => {
    // if(a.name > b.name)
    //   return 1;
    // else if(a.name < b.name)
    //   return -1;
    // else
    //   return 0;

    // if else alternatifi
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});
console.log(sortedObjectsWithName);
