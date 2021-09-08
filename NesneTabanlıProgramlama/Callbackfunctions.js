let val;

function Multiplebytwo(a, b, c, callback) {
    var ary=[]
    for(var i=0; i<3; i++)
        ary[i]=callback(arguments[i]*2); //Fonksiyonun signature larını alır
    return ary;
}

function addone(a)
{
    return a+1;
}

//val= Multiplebytwo(5, 10, 20, addone);

val= Multiplebytwo(5, 10, 20, function(a)
{
    return a+1;
});

//val=addone(10)

console.log(val);
