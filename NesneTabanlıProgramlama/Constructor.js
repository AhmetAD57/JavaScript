//Object literals

// let deneme={
//     name:"Deneme",
//     age:10,
//     yearsofbird:2010
// };

// console.log(deneme);

// function person(name, age, job) //Constructor
// {
//     this.name=name;
//     this.age=age;
//     this.job=job;
//     this.calculate=function(){
//         return 25-this.age;
//     }
// }

// let person=function(name, age, job){
//     this.name=name;
//     this.age=age;
//     this.job=job;
//     this.calculate=function(){
//         return 25-this.age;
//     }
// };




// let deneme= new person('Deneme1', 10, 'student');
// let denemea= new person('Deneme2', 15, 'teacher');

// console.log(deneme.name);
// console.log(deneme.age);
// console.log(deneme.job);
// console.log(deneme.calculate());


//Prototype

let Person= function(name, yearofbird, job){ //Constructor

    this.name=name;
    this.yearofbird=yearofbird;
    this.job=job;
    // this.calculate=function(){
    //     return 2000-this.yearofbird;
    // }
};

Person.prototype.calculate=function(){ //Prototype kalıtım
    
    return 2000-this.yearofbird;
}

Person.prototype.getname=function(){ //Prototype kalıtım
    
    return this.name;
}

Person.prototype.lastname='test';

let deneme= new Person('Deneme', '2001', 'teacher');

console.log(deneme);


function Employee(name, salary)
{
    if(! this instanceof Employee)
        return new Employee(name, salary);
    
    this.name=name;
    this.salary=salary;
}
Employee.prototype.maas=function()
{
    return this.salary;
}

var emp1= new Employee("deneme", 20000);

console.log(emp1.maas());