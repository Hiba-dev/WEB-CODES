//ASYNC_AWAIT (ASYNC=>DON'T WAIT & AWAIT=>DO WAIT)

console.log('Person1 : show ticket')
console.log('Person2 : show ticket')
const promisewifebringticket = new Promise((res,rej)=>{
    setTimeout(()=>{
    res('ticket');
    },2000)
})
let getpopcorn= promisewifebringticket.then((t)=>{
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')
    return new Promise((res,rej) =>  res(`${t} popcorn`))
    })
    getpopcorn.then((t) => console.log(t)); 
console.log('Person4 : show ticket')
console.log('Person5 : show ticket')