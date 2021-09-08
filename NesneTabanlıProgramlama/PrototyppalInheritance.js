let person=function(name, yearofbird, job)
{
    this.name= name;
    this.yearofbird=yearofbird;
    this.job=job;
}

person.prototype.calculateage=function()
{
    return 2018- this.yearofbird;
}

let teacher= function(name, yearofbird, job, subject)
{
    person.call(this, name, yearofbird, job);
    this.subject=subject;
}

//Inheritance person prototype methods
teacher.prototype= Object.create(person.prototype);

//Set teacher constructor
teacher.prototype.constructor=teacher;

teacher.prototype.greeting=function()
{
    return "My name is "+this.name;
}


let deneme1= new teacher("Deneme1", 2010, "teacher", "math");

console.log(deneme1);
console.log(deneme1.calculateage());
console.log(deneme1.greeting());