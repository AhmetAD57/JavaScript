//Loops

//for loop
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    console.log("En sevdiğin sayı " + i);
    continue;
  }

  if (i == 6) {
    console.log("En sevmediğim rakam : 6");
    break;
  }

  console.log(i);
}

//Infinity loop
for(;;){

}

//Retrun kullanabilmek için döngünün bir metot içinde olması gerekir.

//while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//do-while loop
let z = 0;
do {
  console.log(z);
  z++;
} while (z < 10);

let sonuc = 1;
for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) {
    sonuc *= i;
  }
}

console.log(sonuc);

let val = "\n";

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    val += "* ";
  }
  val += "\n";
}

console.log(val);

//Loops in array & objects
let cars = ["Bmw", "Mercedes", "Toyota"];
let people = [
  { firstname: "Deneme1", lastname: "Deneme2" },
  { firstname: "Deneme3", lastname: "Deneme4" },
  { firstname: "Deneme5", lastname: "Deneme6" },
];

//Arrays
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Object
for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstname);
}

//for-in
//Arrays
for (let i in cars) {
  console.log(`İndex : ${i} value : ${cars[i]}`);
}

//Object
for (let i in people) {
  console.log(`İndex : ${i} value : ${people[i].firstname}`);
}

//for of (ES6)
//Arrays
for (let i of cars) {
    console.log(`İndex : ${i} value : ${cars[i]}`);
}


//Foreach
//Object
//ForEach bir higher oder bir fonksiyondur.
cars.forEach(function (item, index) {
  console.log(item, index);
});

people.forEach(function (item) {
  console.log(item.firstname);
});

//map : returns an array
let vala = people.map(function (item) {
  return item.firstname + " " + item.lastname;
});

console.log(vala);

let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function (n) {
  return n * n;
});

console.log(num);
