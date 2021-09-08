// let val;

// val=window.document;

// val=document.all;
// val=document.all.length;
// val=document.all[5];
// val=document.head;
// val=document.body;
// val=document.anchors;
// val=document.URL;
// val=document.domain;
// val=document.images;
// val=document.title;
// val=document.forms;
// val=document.forms[0];
// //val=document.forms[0].id;
// //val=document.forms[0].method;
// //val=document.forms[0].action;
// val=document.scripts;
// val=document.scripts[2];
// //val=document.scripts[2].getAttribute("src");

// console.log(val);


//Selecting Elements

//Single elements

//documnet.getElementById();

// let val;

// val=document.getElementById('header');
// val=document.getElementById('header').id;
// val=document.getElementById('header').className;

// val=document.getElementById('header');

// //val=val.id;
// //val=val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontSize='bold';
// //val.style.display='none';

// val=document.getElementById('header').innerText='Deneme';
// val=document.getElementById('header').innerText='<b>Deneme</b>';
// val=document.getElementById('header').innerHTML='<b>Deneme</b>';

// console.log(val);

// document.querySelector();

// console.log(document.querySelector('#header'));
// console.log(document.querySelector('.card-header'));
// console.log(document.querySelector('div'));
// document.querySelector('#header').style.color='red';
// document.querySelector('#header').textContent='Deneme';

// document.querySelector('#header').className='card mt-3 mb-3';
// document.querySelector('#header').classList.add('active');


//Multiple Elements

//Class Name
//document.getElementsByClassName();

//let val;

//val=document.getElementsByClassName('card');
//val=document.getElementsByClassName('card')[1];

//val=val[0]

// val[1].style.color='red';
// val[1].style.fontSize='25px';
// val[1].textContent='Deneme';

// for(let i=0;i<val.length; i++)
// {
//     console.log(val[i].style.color='red');
//     console.log(val[i].textcontent='Deneme1');
// }

//document.getElementsByTagName();

// val=document.getElementsByTagName('li');
// val=document.getElementById('header').getElementsByTagName('ul');

//document.querySelectorAll();

// val=document.querySelectorAll('div');

// val.forEach(function(item, index)
// {
//    console.log(item); 
// });

// console.log(val);


//Traversing to Dom
// let val;

// let list=document.querySelector('.list-group');

// val=list;

// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[0].nodeName;
// val=list.childNodes[0].nodeType;
// val=list.childNodes[1].nodeType;

// val= list.children;
// val= list.children[0];
// val= list.children[2];

// val= list.children[2].textContent='newe item';
// val= list.children[2].children;

// val= list.firstChild;
// val= list.firstElementChild;

// val= list.lastChild;
// val= list.lastElementChild;

// val= list.childElementCount;

// val= list.parentNode;
// val= list.parentElement;

// val= list.children[0].nextSibling;
// val= list.children[0].nextElementSibling;

// val= list.children[1].previousSibling;
// val= list.children[1].previousElementSibling;

// console.log(val);

// for(let i=0; i<list.childNodes.length; i++)
// {
//    if(list.childNodes[i].nodeType==3)
//    console.log(list.childNodes[i]);
// }

//Removing Element
//const taskList= document.querySelector('#task-list');

// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

// //Remoing Attribute
// taskList.children[1].removeAttribute('class');

// for(let i=0; i<taskList.children.length;i++)
// {
//    taskList.children[i].removeAttribute('class');
// }

// //Replacing Elements
// const cardHeader= document.querySelector('.card-header');

// //Create Element
// const h2= document.createElement('h2');
// h2.setAttribute('class', 'card-header');
// h2.appendChild(document.createTextNode('Deneme'));
// const parent=document.querySelector('.card');
// parent.replaceChild(h2, cardHeader);

// console.log(cardHeader);

//console.log(taskList);

//Classes

// let val;

// link=taskList.children[0].children[0];

// val=link.className;
// val=link.classList;
// val=link.classList[0];
// val=link.classList[1];

// link.classList.add('new');
// link.classList.remove('new');

// //Attribute

// val=link.getAttribute('data-id');
// val=link.getAttribute('href');
// val=link.setAttribute('href', 'https://google.com');
// val=hasAttribute('data-val')

// console.log(val);


//Creating Elements

//create element

// const li=document.createElement('li');

// //add class

// li.className='list-group-item list-group-item-secondary'

// //attribute

// li.setAttribute('title', 'new item');
// li.setAttribute('data-id', '5');

// //text node

// const  text= document.createTextNode('Deneme');
// li.appendChild(text);

// const a=document.createElement('a');
// a.setAttribute('href', '#');
// a.className="delete-item float-right";
// a.innerHTML='icon';

// //append a to li

// li.appendChild(a);

// //append li to ul

// document.querySelector('#task-list').appendChild(li);


// console.log(li);




//Events

// //Event Listeners

// const btn=document.querySelector('#btnDeleteAll');
// const btn2=document.querySelector('#btnAddNewTask');

// btn.addEventListener('click', function(e){
//    let val;
//    val=e;

//    val=e.target;
//    val=e.target.id;
//    val=e.target.classList;
//    val=e.type;
   
//    console.log(val);
   


//    e.preventDefault();
// });

// // btn.addEventListener('click', btnClick);
// // btn.addEventListener('click', btnClick2);
// // btn2.addEventListener('click', btnClick);

// // function btnClick()
// // {
// //    console.log('Deneme');
// // }

// // function btnClick2()
// // {
// //    console.log('Deneme 2');
// // }


//Mause Events
// const btn=document.querySelector('#btnDeleteAll');
// const ul=document.querySelector('#task-list');

// //click
// btn.addEventListener('click', 'eventHandler');
// ul.addEventListener('click', 'eventHandler');

// //doubleclick
// btn.addEventListener('dblclick', 'eventHandler');

// //mousedown
// btn.addEventListener('mousedown', 'eventHandler');

// //mouseup
// btn.addEventListener('mouseup', 'eventHandler');

// //mouseenter
// btn.addEventListener('mouseenter', 'eventHandler');

// //mousedown
// btn.addEventListener('mousedown', 'eventHandler');

// //mouseleave
// btn.addEventListener('mouseleave', 'eventHandler');

// //mouseover
// btn.addEventListener('mouseover', 'eventHandler');

// //mouseout
// btn.addEventListener('mouseout', 'eventHandler');

// //mosuemove
// const h5= document.querySelector('h5');
// h5.addEventListener('mousemove', eventHandler);


// function eventHandler(event)
// {
//    console.log(`event type: ${event.type}`);

//    h5.textContent=`Mosue X: ${event.offSetX} Mouse Y: ${event.offSety}`;
// }


//Keybord Events

// const input=document.querySelector('#xttaskName');
// const form=document.querySelector('form');
// const select=document.querySelector('#select');

// input.addEventListener('keydown', eventHandler);
// input.addEventListener('keyup', eventHandler);
// input.addEventListener('keypress', eventHandler);
// input.addEventListener('focus', eventHandler);
// input.addEventListener('blur', eventHandler);
// input.addEventListener('cut', eventHandler);
// input.addEventListener('paste', eventHandler);
// input.addEventListener('select', eventHandler);
// form.addEventListener('submit', eventHandler);
// select.addEventListener('change', eventHandler);

// function eventHandler(event)
// {
//    console.log(`event type: ${event.type}`);

//    // console.log(`key code: ${event.keyCode}`);
//    // console.log(`key value: ${event.target.value}`);
//    //event.target.style.backgroundColor='yellow';

//    event.preventDefault();
// }

//Event Bubbling

// const form=document.querySelector('form');
// const cardBody=document.querySelector('.cardBody');
// const card=document.querySelector('.card');
// const container=document.querySelector('.container');

// form.addEventListener('click', function(e){
//    console.log('form');
//    e.stopPropagation();
// });

// cardBody.addEventListener('click', function(e){
//    console.log('card Body');
//    e.stopPropagation();
// });

// card.addEventListener('click', function(e){
//    console.log('card');
//    e.stopPropagation();
// });

// container.addEventListener('click', function(e){
//    console.log('container');
//    e.stopPropagation();
// });

// //Event Capturing

// form.addEventListener('click', function(e){
//    console.log('form');
//    e.stopPropagation();
// }, true);

// cardBody.addEventListener('click', function(e){
//    console.log('card Body');
//    e.stopPropagation();
// }, true);

// card.addEventListener('click', function(e){
//    console.log('card');
//    e.stopPropagation();
// }, true);

// container.addEventListener('click', function(e){
//    console.log('container');
//    e.stopPropagation();
// }, true);

// const deleteItems= documnet.querySelector('.fa-times');

// deleteItems.forEach(function(item) {
//    item.addEventListener('click', function(e){
//       console.log(e.targer);
//    })
   
// });

// const ul= documnet.querySelector('ul');

// ul.addEventListener('click', function(e){
//    if(e.targer.className='fas fa-times')
//    e.targer.parentElement.parentElement.remov();
//    e.stopPropagation();
// });



//Tarayıcıda bilgi saklama
//Local Storage
let val;

//set item
const firstName=localStorage.setItem('firstName', 'Deneme');
const lastName=localStorage.setItem('lastName', 'Deneme1');
let hobies=['sinema', 'araba', 'gezmek']

//get item
val=localStorage.getItem('firstName');
val=localStorage.getItem('lastName');

//remove
//val=localStorage.removeItem('firstName');
//val=localStorage.removeItem('lastName');

//clear
//localStorage.clear();

//set array to storage
localStorage.setItem('hobies', JSON.stringify(hobies));

val=JSON.parse(localStorage.getItem('hobies'));


console.log(val);
console.log(localStorage);

//Session Storage
// const city=sessionStorage.setItem('city', 'Deneme2');
// const country=sessionStorage.setItem('country', 'Deneme3');
// console.log(sessionStorage);