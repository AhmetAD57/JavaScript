//if/else statements
// const firstname='Sena';
// const age=19;
// const isstudent=true;
// const school='university';

// if(firstname==='Sena')
// {
//     console.log('Merhaba Sena');
// }


// if(age===19)
// {
//     console.log('yaşınız 19');
// }

// if(isstudent)
// {
//     console.log('Merhaba öğrenci');
// }
// else
// {
//     console.log('Merhaba işler nasıl');    
// }


// if(age>=18)
// {
//     if((school=='university') || (school=='high school'))
//     {
//         console.log('ehliyet alabilirsiniz')
//     }
//     else
//     {
//         console.log('ehliyet durumunuz yetersiz');
//     }
// }
// else
// {
//     console.log('ehliyet alamazsınız');
// }


// if(age>0 && age<12)
// {
// console.log(`${firstname} is a child`);
// }

// else if(age>=13 && 19<=age)
// {
// console.log(`${firstname} is a teenager`);
// }

// else
// {
// console.log(`${firstname} is a adult`);
// }


// if(typeof id!='undefined')
// {
//     console.log('id '+id);
// }
// else
// {
//     console.log('no id');
// }


//switch statements
// let category='bilgisayar';

// switch(category)
// {
//     case 'telefon':
//         console.log('telefon kategorisi');
//     break;

//     case 'bilgisayar':
//         console.log('bilgisayar kategorisi');
//     break;

//     default:
//         console.log('yanlış kategori');

// }

// let day;

// switch(new Date().getDay())
// {
//     case 0:
//     case 6:    
//         day='Hafta sonu';
//     break;

//     case 1:
//     case 2:    
//     case 3:
//     case 4:
//     case 5:    
//         day='Hafta içi';
//     break;
// }

// console.log(`Bugün ${day}`);



// const age=9;
// const firstname='sena';

// switch(true)
// {
//     case (age>0 && age<12):
//         console.log(`${firstname} is a child`);
//     break;

//     case (age>=13 && 19<=age):
//         console.log(`${firstname} is a teenager`);
//     break;

//     default:
//         console.log(`${firstname} is a adult`);   
// }

//object literals
let val;

let person={
    firstname: 'Deneme',
    lastname: 'Deneme1',
    age: 7,
    hobbies: ['music', 'game'],
    address:{
        city:'kocaeli',
        country: 'türkiye'
    },
    getBirdYear: function(){
        return 2018-this.age;
    }

};

val=person;
val=person.firstname;
val=person.lastname;
val=person['firstname'];
val=person.age;
val=person.hobbies;
val=person.hobbies[1];
val=person.hobbies.length;
val=person.address;
val=person.address.city;
val=person.address['city'];
val=person.getBirdYear();


let people=[
    {firstname:'Deneme1', lastname: 'Deneme2'},
    {firstname:'Deneme3', lastname: 'Deneme4'},
    {firstname:'Deneme5', lastname: 'Deneme6'}  
]

val=people[2];
val=people[2].firstname;

for(let i=0; i<people.length; i++)
{
    console.log(people[i].firstname);
}

console.log(val);
console.log(typeof val);

