//DOM IS LIKE A TREE STRUCTURE

/*WINDOW OBJECT--> parent object of a browser

console.log(window); //contains all kind of 'functions' & 'properties'
alert('hi'); */


//DOM SELECTION (select element from document)

//SINGLE SELECTOR ELEMENT (select only 1 element)

//first single selector
console.log(document.getElementById('my-form')); //my form is an ID
//or
const myform = document.getElementById('my-form');
console.log(myform);
 
////NEWWER & MOST USED SINGLE SELECTOR THAN OTHER SINGLE SELECTORS
//second single selector
//Query Selector             (works as JQuery,that made it easy to select 
                               //other things than id like classes,tags etc)
                
console.log(document.querySelector('.container')); //container is a class

console.log(document.querySelector('h1')); //container is a tag



//MULTI SELECTOR ELEMENT

//NEWWER & MOST USED MULTI SELECTOR THAN OTHER OLD MULTI SELECTORS
//first multi selector--> can select an id, class and tags etc..
console.log(document.querySelectorAll('item'))        //can run array methods


//second multi selector--> can  only select class
console.log(document.getElementsByClassName('.item')); //can't run array methods
                                             
//we convert it into array
//second multi selector--> can  only select class
console.log(document.getElementsByTagName('li'));     //can't run array methods
                                                     //we convert it into array

//LOOPING THROUGH QUERY SELECTOR ALL
const items = document.querySelectorAll('.item'); //print each item class one by one
items.forEach((item) => console.log(item));


//  MANIPULATION/ CHANGING IN DOM
const ul = document.querySelector('.items');

/*methods
ul.remove();  
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'bye';
ul.lastElementChild.textContent = 'goodbye';
ul.firstElementChild.innerHTML = '<h3> hello <h3>';  //add html dynamically

const btn = document.querySelector('.btn');        //add style
btn.style.background = 'blue'; */


//EVENTS
/*const btn = document.querySelector('.btn');  

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click');
}
)*/

//diff properties of events
/*click event
const btn = document.querySelector('.btn');  

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e); //show diff properties of event by clicking submit button
    console.log(e.target); //  'target' property shows input button when click submit
    console.log(e.target.className); //targets 'class name' of input button
    console.log(e.target.id); //targets class 'id' of input button

 document.querySelector('#my-form').style.background='grey';//change form bg-color
 document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML='<h2>Hello</h2>';
    
})*/


//mouseover event

/*const btn = document.querySelector('.btn');  

btn.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    console.log(e); //show diff properties of event by clicking submit button
    console.log(e.target); //  'target' property shows input button when click submit
    console.log(e.target.className); //targets 'class name' of input button
    console.log(e.target.id); //targets class 'id' of input button

 document.querySelector('#my-form').style.background='grey';//change form bg-color
 document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML='<h2>Hello</h2>';
})*/


//mouseout event

/*const btn = document.querySelector('.btn');  

btn.addEventListener('mouseout', (e) =>{
    e.preventDefault();
    console.log(e); //show diff properties of event by clicking submit button
    console.log(e.target); //  'target' property shows input button when click submit
    console.log(e.target.className); //targets 'class name' of input button
    console.log(e.target.id); //targets class 'id' of input button

 document.querySelector('#my-form').style.background='grey';//change form bg-color
 document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML='<h2>Hello</h2>';
})*/


//FORM SCRIPT / LITTLE INTERACTIVE APPLICATION BY ADDING JS FUNCTIONALITIES IN DOM

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){

        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
     else{

         const li = document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


         userList.appendChild(li);


         //CLEAR FIELDS
         nameInput.value = '';
         emailIsnput = '';
     }       
}