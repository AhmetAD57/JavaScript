var person={
    name:'Deneme',
    lastname: 'Denemea'
}

Object.defineProperty(person, 'fullname', {

    get () {
        return `${this.name} ${this.lastname}`;
    },
    set (value) {
        const parts= value.split(" ");
        this.name= parts[0];
        this.lastname=parts[1];
    } 
});

Object.defineProperty(person, 'age', {
    value: 50,
    writable: true
});

person.age=55;

person.fullname="Denemea denemed";
console.log(person.fullname);