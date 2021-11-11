//PROMISES

/*let prom = new Promise(function(resolve,reject)
{
    reject();
})

prom.then(function(){
    console.log('successful');

}).catch(function(){
    console.log('fail');
}) */

/*or
let promise = new Promise(function(res,rej)
{
    rej();
})

promise.then(function(){
    console.log('successful');

}).catch(function(){
    console.log('fail');
}) */

//In Asynchronous way
/*const getTodo = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            let error = true;

            if(!error)
            resolve({text: 'complete code example'})

            else
            reject({text: 'incomplete code property'})
        }, 2000)
    })
}

getTodo().then(todo => {
    console.log(todo.text)
}).catch(error => {
    console.log(error.text);
}) */

//practice problems (synchronous)
/*let promise = new Promise((posi,neg)=>{ 
  neg();   //func call
})
.then((a)=>{              //resolve
    console.log(a);
})
.catch((b)=>console.log('ahmed'));  //reject */

//or
/*let prom = new Promise(geeky = (res,rej)=>{
setTimeout(()=>{
res('hiba');

},2000)
})
.then(show=(name)=>{
console.log(name);

}).catch(()=>{
  console.log(20);
})*/