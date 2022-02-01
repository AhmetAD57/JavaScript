
function Question(hobby)
{
    switch(hobby)
    {
        case 'car':
            return function(name){
                console.log(name+ " Car");
            }
        break;
        
        case'book':
            return function(name){
                console.log(name+ " book");
            }
        break;
        
        default: 
            return function(name){
                console.log(name+ " default");
            }
    }
}

var question=Question('car');
question('Deneme');