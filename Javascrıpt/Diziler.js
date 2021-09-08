//Arrays

let names=['Deneme1', 'Deneme2', 'Deneme3', 'Deneme4'];
let years=[2017, 1999, 2012, 2010];
let mix=['Deneme1', 'Deneme2', 1983, null, undefined, ['Deneme3', 'Deneme4']];

//Get array item
console.log(names[0]);
console.log(names[3]);

//Set array item
names[names.length]='Deneme5';

//Add item
years.push(1986);
years.unshift(1986);

//Remove item
years.pop();
years.shift();

//Indexof
let index=names.indexOf('Deneme4');
console.log('Index: '+ index);

//Reverse
names.reverse();

//Sort
years.sort();

//Concat
let val= years.concat(names);
console.log(val);

//Splice
console.log(names);
names.splice(0,2,'Deneme6');

function over18(year){
    let age=2018-year;
    return age>=18;
}

//Find
val=years.find(over18);

console.log(val);

//Filter
val=years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

