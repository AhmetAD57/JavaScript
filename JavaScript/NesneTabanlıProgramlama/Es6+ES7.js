// //ES6

// //Arrow Functions
// let Deneme=()=>{//Parametre almadığı için, Tek satırda paranteze gerek yok
//     console.log("Deneme");
// }

// Deneme();


// let Deneme1=(x, y)=> x*y; //return demeye gerek yok
// let Deneme2=(x, y)=> {return x*y} //parantezli return demeye gerek var
// let Deneme3= text => text.split(' ');//Tek parametrede paranteze gerek yok

// console.log(Deneme1(5,2));
// console.log(Deneme3('a b c'));


// let Deneme4= (id , name)=>(
//     {
//         id: id,
//         name: name
//     }
// );

// console.log(Deneme4(1,'Deneme4'));


// Deneme5a=[
//     {phone: 'a', pirce: 1000},
//     {phone: 'b', pirce: 1500},
//     {phone: 'c', pirce: 1200},
//     {phone: 'd', pirce: 2000}
// ]

// let Deneme5 =Deneme5a.map(x=>x.pirce);

// console.log(Deneme5);


// let ary=[1,2,3,4,5,6,7,8,9,10];

// let Deneme6= ary.filter(x=>x%2==0);

// console.log(Deneme6);

// //This
// let Deneme7={
//     category: 'Phone',
//     names: ['Phone1', 'Phone2', 'Phone3'],
//     call: function()
//     {
//         this.names.map((name)=>{
//             console.log(`${this.category} ${name}`)
//         })
//     }
// }

// Deneme7.call();

// //Spread operator

// function gettotal(a,b,c)
// {
//     return a+b+c;
// }

// gettotal(10,20,30);

// let numbers=[10, 20, 30];

// console.log(gettotal(...numbers));

// let ary1=["two", "three"];
// let ary2=["one", "four", "five"];
// let ary3=["one", ...ary1, "four", "five"];

// ary1.push(...ary2);
// ary1.unshift(...ary2);

// console.log(ary3);

// //Rest parameters

// function sum(...arr)//argumanı direk diziye çeviriyor
// {
//     var result=0;
//     arr.forEach(item=>result+=item);
//     return result;
// }

// console.log(sum(10,20,30));

// //Desturucturing

// //Desturucturing assigment
// var a,b,rest;

// [a, b]=[10, 20];

// console.log(a, b);

// [a, b, ...rest]=[10, 20, 30, 40, 50, 60];

// console.log(a, b, rest);

// ({a, b}= {a:10, b:20});

// console.log(a, b);

// ({a, b, ...rest}= {a:10, b:20, c:30, d:40});

// console.log(a, b, rest);

// //Array Desturucturing
// const arrconfig=["Deneme1", "Deneme2", "Deneme3"];

// const [d, e, f]=arrconfig;

// console.log(d, e, f);

// //Object Desturucturing

// const objconfig={
//     server: "a",
//     port: "b",
//     timeout:"c"
// }

// // const {server, port, timeout}=objconfig;

// // console.log(server, port, timeout);

// const {timeout:t}=objconfig;
// console.log(t);

// const {server, port, timeout="d"}=objconfig;//Eğer karşılık gelen değer yoksa varsayılan değeri alır

// console.log(server, port, timeout);

// const days=["a", "b", "c", "d", "e"];

// [,,x,y]=days;

// console.log(x, y);

// //Arrays

// testarray=["a", "b", "c"];

// //Array.from(testarray).forEach()

// var test=Array.from(testarray);

// for(item of test)
// {

// }

// //from
// var test1=Array.from("test1");
// console.log(test1);

// const test2=[
//     {name:"Deneme1", pirce: 3000},
//     {name:"Deneme2", pirce: 4000},
//     {name:"Deneme3", pirce: 5000},
// ]

// console.log(Array.from(test2,test=>test.name=="Deneme1"));
// console.log(test2.find(test=>test.name=="Deneme1"));
// console.log(test2.filter(test=>test.name=="Deneme1"));
// console.log(test2.findIndex(test=>test.name=="Deneme1"));

// var entrys= testarray.entries();
// var keys= testarray.keys();
// var values= testarray.values();


//Map

// let Val;

// let numbers= new Map();

// numbers.set(1, "one");
// numbers.set("2", "two");

// Val=numbers;

// Val=numbers.get(1);
// Val=numbers.get("2");
// Val=numbers.size;
// Val=numbers.has(1);
// Val=numbers.has("2");
// Val=numbers.delete("2");
// //numbers.clear();

// console.log(Val);

// for(var [key, value] of numbers)
// {
//     console.log(key+"="+value);
// }

// for(var [key, value] of numbers.entries())
// {
//     console.log(key+"="+value);
// }

// for(var key of numbers.keys())
// {
//     console.log(key);
// }

// for(var value of numbers.values())
// {
//     console.log(value);
// }

// numbers.forEach(function(key, value)
// {
//     console.log(key+"="+value);
// });

// first= new Map([
//     [4, "four"],
//     [5, "five"]
// ]);

// second= new Map([
//     [1, "one"],
//     [2, "two"]
// ]);

// var merge= new Map([...first, ...second]);
// console.log(merge);

//Sets Colection, unique value

// let val;

// let mySet= new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2);//Aynı değeri bir daha atmaz
// mySet.add("iki");
// mySet.add({a:1, b:2});

// var obj= {a:1, b:2};//Objelerin adresleri farklı olduğu için farklı değermiş gibi görür
// mySet.add(obj);
// console.log(mySet);

// val=mySet.has(1);
// val=mySet.has(obj);

// console.log(val);


// for(let item of mySet)
// {
//     console.log(item);
// }

// for(let item of mySet.keys())
// {
//     console.log(item);
// }

// for(let item of mySet.values())
// {
//     console.log(item);
// }

// for(let [key, value] of mySet.entries())
// {
//     console.log(key, value);
// }

// console.log(Array.from(mySet));


// let mySet2= new Set([1, 2, 3, 4]);
// console.log(mySet2);

// //intersect

// //let intersect = new Set(Array.from(mySet).filter(x=> mySet2.has(x)));

// let intersect = new Set([...mySet].filter(x=> mySet2.has(x)));

// console.log(intersect);

// //Difference

// let difference = new Set([...mySet].filter(x=> !mySet2.has(x)));

// console.log(difference);


//Classes

class Person{
    constructor(name, job, yearofbirth){
        this.name=name;
        this.job=job;
        this.yearofbirth=yearofbirth;
    }

    calulateage(){
        return 2000-this.yearofbirth;
    }

    static hello()
    {
        console.log("Hello");
    }
}

class customer extends Person{
    constructor(name, job, yearofbirth, country)
    {
        super(name, job, yearofbirth);
        this.country=country;
    }

    static hello1()
    {
        console.log("Hello1");
    }
}

var deneme= new Person("Jack", "teacher", 1950);

console.log(deneme.calulateage());

Person.hello();

var deneme2= new customer("Jack", "teacher", 1950, "turkey");

customer.hello();

customer.hello1();