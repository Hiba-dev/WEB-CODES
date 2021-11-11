//  OBJECT ORIENTED PROGRAMMING IN JS (ES5)

/*
//CONSTRUCTOR FUNCTION

function Person(fname, lname, dob)
{
//Properties

this.fname = fname;                    
this.lname = lname;
this.dob = new Date(dob);        //date object/ date constructor
}


//fucntions in object for integrating their properties

this.getBirthYear = function()      //method defining
 {
    return this.dob.getFullYear();
}

this.getFullName = function() {
    return `${this.fname} ${this.lname}`;
}
*/




/*
//PROTOTYPES (for functions, properties & constructors using 'prototype' keyword)

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return  `${this.fname}  ${this.lname}`
}


// INSTANTIATE OBJECT 
const person1 = new Person('hiba', 'ahmed', '12-29-1998');
const person2 = new Person('ali', 'khan', '3-30-1970');
console.log (person1);
console.log (person2);
console.log(person1.fname + " " + person1.lname);
console.log(person1.dob);
console.log(person2.dob.getFullYear()); //get full year
console.log(person1.getBirthYear()); //calling method getbirthyear
console.log(person2.getFullName());
console.log(person1.dob.getFullYear()); 
console.log(person1.getFullName()); 
const person1 = new Person('hiba', 'ahmed', '12-29-1998');
console.log(person1); //func would be in prototype not in object
*/
