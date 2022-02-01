let personproto={
    calculateage: function(){
        return 2018- this.yearofbird;
    }
};

let deneme= Object.create(personproto);

deneme.name="deneme1";
deneme.yearofbird=2010;
deneme.job="students";

console.log(deneme);
console.log(deneme.calculateage());

let deneme1= Object.create(personproto,{
    name: {value: "deneme1"},
    yearofbird: {value: 2010},
    job: {value: "teacher"}
});

console.log(deneme1.calculateage());
