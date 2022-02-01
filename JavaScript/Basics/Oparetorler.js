let val;
const a=10;
const b=5;
let c=5;
let d=3;

//Aritmatik operatörleri
val=a+b;
val=a-b;
val=a*b;
val=a/b;
val=a%b;
val=d++;
val=++d;
val=--d;
val=d--;

//Atama operatörleri
val=a;
val+=a;
val-=a;
val*=a;
val/=a;
val%=a;

//Karşılaştırma operatörleri
val=a==b;
val=b==c;
val=b===c; //Değer ve tip konrtrolü yapılır
val=5==='5';
val=a!=b;
val=a!==b;
val=a>b;
val=a<b;
val=a>=b;
val=5>=5;
val=a<=b;

//Mantıksal operatörler

//&&
val=(a>b) && (a>b)

//||
val=(a<b) || (a<b)

//!
val=!(a>b)


console.log(val);
console.log(typeof val);

