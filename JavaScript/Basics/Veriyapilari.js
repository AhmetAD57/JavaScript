//Date object

let d = new Date();
let birthday = new Date(1990, 1, 5);

// Set methods
d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);
d.setSeconds(20);

// Get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);

//Numbers
let val;

val = isNaN("10");
val = isNaN("a10");

var num = 10.12456789;
val = num.toPrecision(6);
val = num.toFixed(2);

val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(2.4);
val = Math.ceil(2.6);
val = Math.floor(2.4);
val = Math.floor(2.7);
val = Math.sqrt(64);
val = Math.pow(2.4);
val = Math.abs(-100);
val = Math.min(1, 2, 3, 2, 4, 9);
val = Math.max(4, 5, 6, 4, 98, 7);
val = Math.floor(Math.random() * 100 + 1);

console.log(val);
console.log(typeof val);

//Strings

const firstname = "Deneme";
const lastname = "Deneme1";
let hobbies = "sinema,spor,kitap,yazılım";
const age = 35;

let val;

//String concatenation
val = firstname + " " + lastname;
val = "Deneme";
val += " Deneme1";
val =
  "Benim adım " +
  firstname +
  " " +
  lastname +
  " ve yaşım " +
  age +
  " denemea'denemeb";

//String concat
val = firstname.concat(" ", lastname);

//String uppercase-lowercase
val = val.toUpperCase();
val = val.toLowerCase();

//String replace
val = "   " + val.replace("deneme", "deneme2") + "      ";

//Trim
val = val.trim();

//Substring
val = val.substring(3, 8);

//Slice
val = val.slice(0, 5);

val = val.indexOf("x");

val = val[0];

//String length
val = val.length;

val = hobbies.split(",");

console.log(val);
console.log(typeof val);

//Template literals

const fullname = "Deneme";
const city = "Deneme1";
const YearOfBird = 1999;

let val;

val =
  "my name is " +
  fullname +
  " I'm " +
  (2018 - YearOfBird) +
  " years old and I live in " +
  city;

val = `my name is ${fullname} I'm ${
  //ternary operator
  2018 - YearOfBird >= 18 ? "over 18" : "under 18"
} and I live in ${city}`;

console.log(val);
