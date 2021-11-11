//ES6 JS


//alert("goodbye");
//some methods of console
/*console.log('hi');
console.warn('this is warning');
console.error("this is error"); */

//VARIABLES IN JS (VAR, LET, CONST)

//VAR IS GLOBALLY/FUNC SCOPED (it creates property in windows object when it intializes-->OLD JS 

//EXAMPLE # 1
/*var counter = 5;
function sayName() {
    var name ='hiba';
}
sayName();
console.log(name); //we can't use variables outside the func that declares inside the func

console.log(counter); */

/*EXAMPLE 2
function check(){
    var a =10;

    if(true)
    {
       var a =20;
       console.log(a);
    }
    console.log(a);
}
check();*/


//LET & CONST VARIABLES ARE BLOCK SCOPED
//let variable(reassign values)
/*let x;
x= 10;
console.log(x=20);*/

/*EXAMPLE # 1
let counter = 5;
function sayName() {
    let name ='hiba';
}
sayName();
console.log(name);
console.log(counter); */

/*EXAMPLE # 2
function check(){
    let a =10;

    if(true)
    {
       let a =20;
       console.log(a);
    }
    console.log(a);
}
check();*/


//const variable(can't reassign value)
/*const y=25;
console.log(y);*/


//PRIMITIVE DATATYPES-->string, numbers, boolean, null, undefined

/*const name='hiba';
const age= 21;
const iscool= true;
const a= null;
const b= undefined;
let c;
console.log(typeof age);*/

//STRINGS

/*const Name='Hiba';
const Age= 21;

//concatination (old way)
console.log('my name is '+Name+ ' and i am '+ Age);

//TEMPLETE LITERALS

console.log(`my name is ${name} and i am ${age}`);//use backticks instead of quotes to make templete string
//or
const bio = `my name is ${name} and i am ${age}`;
console.log(bio); */


//STRING PROPERTIES & METHODS

//length property
/*const k= 'hello world!';
console.log(k.length);

//Upper/lower case function
console.log(k.toUpperCase());
console.log(k.toLowerCase());

//Substring function
console.log(k.substring(0,8));//indexing stops before 8

//chains two methods
console.log(k.substring(0,8).toUpperCase());
console.log(k.substring(0,8).toLowerCase());

//split strings into an array

//split by letter
console.log(k.split(''));

//split by words
const h= 'tech, computers, it, code';
console.log(h.split(', ')) */
 

//ARRAYS-->variable that holds multiple values

/*const r= new Array(1,2,3,4,5);
console.log(r);

//another way
const q= ['apple','mango','orange'];
console.log(q);

//can use multiple data types
const o= ['apple','mango','orange',3,true,null];
console.log(o);

//can access individual elements
const p= ['apple','mango','orange',3,true,null];
console.log(p[1]);

//can manupilate array elements but can't reassign whole array again
const f= ['apple','mango','orange',3,true,null];
f[2]='peach';
console.log(f[2]); */


//METHODS IN ARRAY

//push at the end
/*const subj = ['english','urdu','maths'];
subj.push('pst');
console.log(subj);

//push at the beginning
const num = [2,4,6];
num.unshift(0);
console.log(num);

//pop at the end
const veg = ['onion','chilli','lemon'];
veg.pop('carrot');
console.log(veg);

//pop at the beginning
const colors = ['red','pink','blue'];
colors.shift('green');
console.log(colors);

//CHECK SOMETHING AS AN ARRAY
const d = [5,6,7,8];
console.log(Array.isArray(d));
//or
const e = [9,6,8,3];
console.log(Array.isArray('hi')); 

//INDEX OF CERTAIN VALUE IN ARRAY
const m = ['bus','bike','cycle'];
console.log(m.indexOf('bike')); */


//OBJECT LITERALS(KEY VALUE PAIRS)

/* person = {                                  //object
    firstname: 'hiba',
    lastname: 'ahmed',
    AGE: 20,
    hobbies: ['music','sports','workout'],  //array
    address: {                             //embedded objects(objects within objects)
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstname, person.lastname);
console.log(person.hobbies[2]);
console.log(person.address.city); 

//DESTRUCTING OBJECTS

//destructuring(pulling out diff variables from object)
const{firstname, lastname, AGE} = person;
console.log(firstname,lastname,AGE);

//pulling out variables from embedded Objects
const{address:{state,city}} = person;
console.log(state,city); 

//PROPERTIES
person.email = 'hiba12@gmail.com'; //email has added in person object
console.log(person); */


//ARRAYS OF OBJECT
const todos =[       
                                    //array
     {                             //object 1
         id:1,
         text:'take out trash',
         iscompleted: true
     },

    {                               //object 2
        id:2,
        text:'meeting with boss',
        iscompleted: false
    },

    {                               //object 3
        id:3,
         text:'cooking with mom',
         iscompleted: true
    }

];
/*console.log(todos);
console.log(todos[1].text);

JSON (DATA FORMAT)-->use in full stack development and using API 
                       //when sending data to a server, usually send it
                       //in JSON format.And very similiar to OBJECT LITERALS.


const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */


//FOR LOOP
/*for(let i=0; i<=5; i++)
{
    console.log(`loop no is: ${i}`);
}
//WHILE LOOP
let j=0;
while(j<3)
{
    console.log(`number is: ${j}`);
    j++;
}
//LOOP THROUGH ARRAYS
//'for of' loop
for(let t of todos)
{
    console.log(t);
}

for(let v of todos)
{
    console.log(v.id);
}*/

//HIGH ORDER ARRAY METHODS-->for iteration of arrays

/*foreach:
todos.foreach(function(todo)     //these high order array methods takes 
{                               //call back func as a parameter
    console.log(todo.text);
}
)*/


/*map
const todoid = todos.map(function(todo)
{
  return todo.id;
});
console.log(todoid);*/


//filter
const todocompleted = todos.filter(function(todo)
{
    return todo.iscompleted === true;
})
console.log(todocompleted);

//map & filter chain to eachother
/*const todocompleted = todos.filter(function(todo)
{
    return todo.iscompleted === true;

}).map(function(todo) {
    return todo.text;
})
console.log(todocompleted);*/


//CONDITIONALS

/*const t = '10';
if(t==10)
{
    console.log('t is 10');
}*/

/*const t = 10;
if(t===10)
{
    console.log('t is 10');
}*/

/*const t = 20;
if(t===10){
    console.log('t is 10');
}
else{
    console.log('t is not 10');
}*/

/*const t = 30;
if(t===20){
    console.log('t is 20');
}
else if(t>20){
     console.log('t is greater than 20');
}else{
    console.log('t is not 20');
}*/

//multiple conditions/logical operators

/*const g = 6;
const l = 7;

if(g>5 || l<7)
{
    console.log('true');
}else {
    console.log('false');
}*/

/*const g = 6;
const l =8;

if(g>4 && l<10)
{
    console.log('true');
}else{
    console.log('false');
}*/

//TERNARY OPERATOR (SHORTHAND IF STATEMENT)
/*const g =10;
const color = g>5 ? 'red' : 'blue';  //condition is true(left)
console.log(color);*/

/*const g =10;
const color = g<5 ? 'red': 'blue';  //condition is false(right)
console.log(color);*/

//SWITCH STATEMENTS USING TERNARY OPERATOR
/*const g = 20;
const color = g>30 ? 'pink':'red';
switch(color)
{
    case  'pink':
        console.log('color is pink');
break;
    case  'red':
        console.log('color is red');
break;
     default:
        console.log('not pink or red');
break;
}*/

//METHODS/FUNCTIONS (FUNCTIONAL PROGRAMMING)

//undefined parameters
function addnum1(num1,num2)   //function defining
{
    console.log(num1+num2);
}

addnum1(2,3);             //function calling

//or

function addnum2(num1=9,num2=7) 
{
    console.log(num1+num2);
}                             
addnum2();                    

//override parameters
function addnum3(num1=8,num2=4)   
{
    console.log(num1+num2);
}
addnum3(4,2);                    

//return keyword
function subnum4(num1=8,num2=4)              //func defining
{
    return num1-num2;
}

console.log(`number is ${subnum4(10,5)}`);   //func calling 
 
//or
function subnum4(num1=8,num2=4)
{
    return num1-num2;
}
const c= subnum4();
console.log(c); 


/*ARROW FUNCTIONS (INTRODUCED IN ES6) 

//if return something in main using return keyword(braces are mandatory)
 const sub =  (n1=7, n2=2) => {      //malformed arrow

    return n1-n2;
 }
 console.log(sub(9,4));

//if only one statement then no need of paranthesis
const add =  (n1=7, n2=2) => console.log(n1+n2)

  add(1,2);

//if return something, without return keyword
const sub1 = (n1=8, n2=6) =>  n1-n2  //return to main

console.log(sub1());

//or
const sub2 = (n1=8, n2=6) =>  n1-n2  //return to main

const u = sub1(9,8);
console.log(u);

//if only 1 parameter, no need of round brackets
const add1 = n1 => n1+6;

console.log(add1(4));

//using foreach(array method)
todos.forEach((value) => console.log(value)); */


/*DEFAULT ARGUMENTS
function  funage(age=18)  //parameter
{
    return age;
}
console.log(funage());    //argument */



/*SPREAD OPERATOR 

const a = [10,20,30];
const b =[...a];
a[0]= 50;
b[1] =60;
console.log(a);
console.log(b); */

/*or
const a = [10,20,30];
const b =[...a,40,50];   //can add new values in array
console.log(a);
console.log(b); */
 
/*or
const a = [10,20,30];
const b =[70,40,50];
console.log(...a, ...b);  //merge arrays  */


/*spread operator using objects
var a = {coursename: 'java', tutor: 'geeky shows'};
var b = {...a};
a.coursename = 'python';
console.log(a);
console.log(b);  */

/*or
var a = {coursename: 'java', tutor: 'geeky shows'};
var b = {studentid: '123', studentname: 'ali', ...a}; // add new obj properties
a.coursename = 'python';
console.log(a);
console.log(b);  */

/*or
var a = {coursename: 'java', tutor: 'geeky shows'};
var b = {studentid: '123', studentname: 'ali', ...a};
a.coursename = 'python';
const c = {...a, ...b};   //merge objects
console.log(c); */


//REST PARAMETER --> //its like an array b/c we can pass alot of parameters 
                      //but rest parameter must be in the last

/*function show(...args){
    console.log(args);
}
show(1,2,3,4,5); */

/*or
function show(a,...num){
    console.log(num);
}
show(1,2,3,4,5); */

/*or
function show(a,...args){
    console.log(a+ ',' +args);
}
show(1,2,3,4,5); */

/*or
function show(...args){
    console.log(args[4]);
}
show(1,2,3,4,5); */




/*
//ES6 CLASSES

class Person{
    constructor(fname, lname, dob)
    {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
    }

getBirthYear()
    {
        return this.dob.getFullYear();
    }
    
getFullName(){
      return `${this.fname} ${this.lname}`; 
}

}


//INSTANTIATION OF OBJECTS
 
const p1 = new Person('Brad','pit','4-5-1971');
const p2 = new Person('Noah', 'Urreha','9-7-1997');

console.log(p2.getFullName);  //calling func
console.log(p1); //func,properties,constructor are in prototype 
*/