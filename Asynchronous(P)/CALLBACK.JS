//In this way, we get error so we use 'CALLBACKS'

/*const getTodo = () => {
    setTimeout(()=> {
        return {text: 'complete the task'}
    },2000)
}

const todo = getTodo();
console.log(todo.text); */


//using callbacks

/*const getTodo = callback => {
    setTimeout(()=> {
        callback ({text: 'complete the task'})
    },2000)
}

getTodo(todo => {
console.log(todo.text);
}) */

//or

/*const getTodo = callback => {
    setTimeout(()=> {
        callback ({text: 'complete the task'})
    },2000)
}

getTodo(todo => {
console.log(todo.text);
});
console.log('hello'); */


/*Practice problems-->synchronous callback(always wait)

let geeky = () =>  console.log('geeky');  //func defining
                    

let show = (val) => {console.log('show'); //func defining
val();
}
show(geeky);
//or

let geeky = (val) =>  {console.log('geeky');  //func defining
val();}

function show() {console.log('show');} //func defining


geeky(show);*/
//or
/*let geeky = (value)=> { console.log('geeky');
value()};

geeky(function show() {
console.log('show');
}
)*/
//or
/*let geeky = (value,name)=> { console.log(`my name is ${name} `);
value(20)};

geeky(show= (age)=> {
console.log(`& my age is ${age}`);
},'hiba');
console.log('& i m a developer'); */

//Practice problems-->asynchronous callbacks(never waits)
/*setTimeout(show = ()=>{
console.log('hi');
},2000);
console.log('kan'); */

