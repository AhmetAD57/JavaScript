var welcome=function(a,b) {
    console.log("Welcome "+this.name+ " values "+a+" "+b);
}

var deneme1={name:'Deneme1'};
var deneme2={name:'Deneme2'};

welcome.call(deneme1, "a", "b");
welcome.call(deneme2, "a", "b");

welcome.apply(deneme1, ["a", "b"]);
welcome.apply(deneme2, ["a", "b"]);

welcomea= welcome.bind(deneme1);
welcomea("a", "b");

welcomeb= welcome.bind(deneme2);
welcomeb("a", "b");