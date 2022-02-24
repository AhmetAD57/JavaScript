//Window and document object
let val;

val=window.document;

val=document.all;
val=document.all.length;
val=document.all[5];
val=document.head;
val=document.body;
val=document.anchors;
val=document.URL;
val=document.domain;
val=document.images;
val=document.title;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].className;
val=document.forms[0].classList;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.scripts;
val=document.scripts[2];
val=document.scripts[2].src;
val=document.scripts[2].getAttribute("src");

console.log(val);


//Selecting Elements

//Single elements
//documnet.getElementById();
console.log("----------------");
val=document.getElementById('header');
val=document.getElementById('header').id;
val=document.getElementById('header').className;

val=document.getElementById('header');
console.log(val);
//val=val.id;
//val=val.className;

val.style.fontSize='45px';
val.style.color='red';
val.style.fontSize='bold';
//val.style.display='none';
console.log(val);

val=document.getElementById('header').innerText='Deneme';
val=document.getElementById('header').textContent='Deneme';
console.log("text ", val);

val=document.getElementById('header').innerText='<b>Deneme</b>';
val=document.getElementById('header').innerHTML='<b>Deneme</b>';


//document.querySelector();
console.log("---------------");
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));
console.log(document.querySelector('div input')); //İlk bulduğunu seçer (Seçme işlemi CSS gibi)

document.querySelector('#header').style.color='red';
document.querySelector('#header').textContent='Deneme';

document.querySelector('#header').className='card mt-3 mb-3';
document.querySelector('#header').classList.add('active');


//Multiple Elements

//Class Name
//document.getElementsByClassName();
console.log("---------------");

val=document.getElementsByClassName('card')[1];
val=document.getElementsByClassName('card'); //(Seçme işlemi CSS gibi değil)
console.log(val);

//HTML collection döndürür. Dizi metotlarıyla kullanabilmek için diziye çevirmek gerekir. 
const arr = [...val];
console.log("Array: ", arr);
console.log("Array reverse: ", arr.reverse());

console.log(val[0]);

val[1].style.color='red';
val[1].style.fontSize='25px';
val[1].textContent='Deneme';
console.log(val[1]);

for(let i=0;i<val.length; i++)
{
    console.log(val[i].style.color='red');
    console.log(val[i].textContent='Deneme1');
}

//Tag Name
//document.getElementsByTagName();
console.log("---------------");

val=document.getElementById('header').getElementsByTagName('ul');
val=document.getElementsByTagName('div');
console.log(val);

//Query selector un birden fazla eleman seçebileni, diziye çevrimeye gerek yok
//document.querySelectorAll();
console.log("---------------");

val=document.querySelectorAll('div');
console.log(val);
//Node list döndürür. Dizi metotlarıyla kullanabilmek için diziye çevirmeye gerek yoktur. 
val.forEach(function(item, index){
   console.log(item);
});


//Traversing to Dom
console.log("---------------");

let list=document.querySelector('div');

let val2=list;
console.log(val2);

val2=list.childNodes; // Child ler alt alta yazıldıklarında her aşağı inme için childnodes a bir text ekler (Etiketler dışındaki değerleride alır)
console.log(val2);

val2=list.childNodes[0];
val2=list.childNodes[0].nodeName;
val2=list.childNodes[0].nodeType;
val2=list.childNodes[1].nodeType; //1, 2 gibi node type değerleri döndürür
console.log(val2);

val2= list.children; //Sadece etiket değerlerini ele alır
val2= list.children[0];
val2= list.children[2];
console.log(val2);

val2= list.children[2].textContent='newe item';
val2= list.children[2].children;
console.log(val2);

val2= list.firstChild; //Etiket dışındaki elemanlarıda ele alır
val2= list.firstElementChild; //Sadece etiket değerlerini ele alır

val2= list.lastChild;
val2= list.lastElementChild;

val2= list.childElementCount;
console.log(val2);

val2= list.parentNode; //child in içinde bulunduğu parenti döndürür.
console.log(val2);

val2= list.parentElement; //Elemantin içinde bulunduğu parenti döndürür.
console.log(val2);

val2= list.children[0].nextSibling; //Sonraki aynı seviyedeki komşusu (Etiket olmayabilir)
console.log(val2);
val2= list.children[0].nextElementSibling; //Sonraki aynı seviyedeki komşusu (Etiket)
console.log(val2);

val2= list.children[1].previousSibling; //Önceki aynı seviyedeki komşusu (Etiket olmayabilir)
val2= list.children[1].previousElementSibling; //Önceki aynı seviyedeki komşusu (Etiket)

console.log(val2);

for(let i=0; i<list.childNodes.length; i++){
   if(list.childNodes[i].nodeType==3)
   console.log(list.childNodes[i]);
}


//Creating Elements
console.log("---------------");


//create element
const li = document.createElement('li');

//add class
li.className='list-group-item list-group-item-secondary';
li.id='id';

//attribute
li.setAttribute('title', 'new item');
li.setAttribute('data-id', '5');

//text node
const text = document.createTextNode('Deneme');
li.appendChild(text);


const a = document.createElement('a');
a.setAttribute('href', '#');
a.className="delete-item float-right";
a.innerHTML='icon';

//append a to li
li.appendChild(a);

console.log(li);
//append li to ul
document.querySelector('ul').appendChild(li);


//Replacing Elements
const newHeader = document.createElement('h6');
newHeader.id = "h6-id";
newHeader.textContent = "Header";

const parent = document.querySelector("body");
const oldHeader = document.querySelector("h1");

parent.replaceChild(newHeader, oldHeader);


//Removing Element
const taskList= document.querySelector('#task-list');

taskList.remove();
taskList.childNodes[7].remove();
taskList.children[3].remove();
taskList.removeChild(taskList.children[3]);

//Remoing Attribute
taskList.children[1].removeAttribute('class');

for(let i=0; i<taskList.children.length;i++){
   taskList.children[i].removeAttribute('class');
}

//Attribute
const val3 = link.getAttribute('data-id');
val3 = link.getAttribute('href');
val3 = link.setAttribute('href', 'https://google.com');
val3 = hasAttribute('data-val')

console.log(val3);



//Events

//Event Listeners
const btn=document.querySelector('#btnDeleteAll');
const btn2=document.querySelector('#btnAddNewTask');

btn.addEventListener('click', function(e){
    e.preventDefault(); //Sayfanın yenilenmesi engellenir.
    let val = e;
    console.log(val);

    val=e.target;
    val=e.target.id;
    val=e.target.classList;
    val=e.type;
   
    console.log(val);
});

btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnClick2);
btn2.addEventListener('click', btnClick);

function btnClick(){
   console.log('Deneme');
}

function btnClick2(){
   console.log('Deneme 2');
}


//Mause Events
const btn=document.querySelector('#btnDeleteAll');
const ul=document.querySelector('#task-list');

//click
btn.addEventListener('click', eventHandler);
ul.addEventListener('click', eventHandler);

//doubleclick
btn.addEventListener('dblclick', eventHandler);

//mousedown
btn.addEventListener('mousedown', eventHandler);

//mouseup
btn.addEventListener('mouseup', eventHandler);

//mouseenter
btn.addEventListener('mouseenter', eventHandler);

//mousedown
btn.addEventListener('mousedown', eventHandler);

//mouseleave
btn.addEventListener('mouseleave', eventHandler);

//mouseover
btn.addEventListener('mouseover', eventHandler);

//mouseout
btn.addEventListener('mouseout', eventHandler);

//mosuemove
const h5= document.querySelector('h5');
h5.addEventListener('mousemove', eventHandler);

function eventHandler(event){
    console.log(`event type: ${event.type}`);
    h5.textContent=`Mosue X: ${event.offSetX} Mouse Y: ${event.offSety}`;
}


//Keybord Events
const input=document.querySelector('#xttaskName');
const form=document.querySelector('form');
const select=document.querySelector('#select');

input.addEventListener('keydown', eventHandler);
input.addEventListener('keyup', eventHandler);
input.addEventListener('keypress', eventHandler);
input.addEventListener('focus', eventHandler);
input.addEventListener('blur', eventHandler);
input.addEventListener('cut', eventHandler);
input.addEventListener('paste', eventHandler);
input.addEventListener('select', eventHandler);
form.addEventListener('submit', eventHandler);
select.addEventListener('change', eventHandler);

function eventHandler(event){
   console.log(`event type: ${event.type}`);

   console.log(`key code: ${event.keyCode}`);
   console.log(`key value: ${event.target.value}`);
   event.target.style.backgroundColor='yellow';

   event.preventDefault();
}

//Event Bubbling
//Eğer bir tag daki event onun parent ındada varsa parent ındaki eventda tetiklenir.

//Event delegation: Aynı seviyede ve aynı class a sahip başka taglar varsa event sadece ilgili tag için çalışır. 

//Bir parent ın event ı onun child larındada çalışır

const form=document.querySelector('form');
const cardBody=document.querySelector('.cardBody');
const card=document.querySelector('.card');
const container=document.querySelector('.container');

form.addEventListener('click', function(e){
   console.log('form');
   e.stopPropagation();
});

cardBody.addEventListener('click', function(e){
   console.log('card Body');
   e.stopPropagation();
});

card.addEventListener('click', function(e){
   console.log('card');
   e.stopPropagation();
});

container.addEventListener('click', function(e){
   console.log('container');
   e.stopPropagation();
});


//Event Capturing
form.addEventListener('click', function(e){
   console.log('form');
   e.stopPropagation();
}, true);

cardBody.addEventListener('click', function(e){
   console.log('card Body');
   e.stopPropagation();
}, true);

card.addEventListener('click', function(e){
   console.log('card');
   e.stopPropagation();
}, true);

container.addEventListener('click', function(e){
   console.log('container');
   e.stopPropagation();
}, true);

const deleteItems= documnet.querySelector('.fa-times');

deleteItems.forEach(function(item) {
   item.addEventListener('click', function(e){
      console.log(e.targer);
   })
});

const ul= documnet.querySelector('ul');

ul.addEventListener('click', function(e){
   if(e.targer.className='fas fa-times')
   e.targer.parentElement.parentElement.remov();
   e.stopPropagation();
});



//Tarayıcıda bilgi saklama

//Local Storage
//set item
const firstName=localStorage.setItem('firstName', 'Deneme');
const lastName=localStorage.setItem('lastName', 'Deneme1');
let hobies=['sinema', 'araba', 'gezmek']

//get item
let val=localStorage.getItem('firstName');
val=localStorage.getItem('lastName');

//remove
val=localStorage.removeItem('firstName');
val=localStorage.removeItem('lastName');

//clear
localStorage.clear();

//set array to storage
localStorage.setItem('hobies', JSON.stringify(hobies));

val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);
console.log(localStorage);


//Session Storage
const city = sessionStorage.setItem('city', 'Deneme2');
const country = sessionStorage.setItem('country', 'Deneme3');
console.log(sessionStorage);