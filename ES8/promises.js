//PROMISES
  
  /*const posts = [       
    {title : 'post one', body: 'this is post one'},
    {title : 'post two', body: 'this is post two'}
    ];
    
    
    function getposts(){
    
        setTimeout(() => {
            let output ='';
    
            posts.forEach((post , index) =>{
                output += `<li>${post.title}</li>`;
            });
    
            document.body.innerHTML = output;
        }, 1000);    //posts display after 1sec
    
        }
        */
    

    
  /*function createpost(post) {
      return new Promise((resolve, reject) => {

          setTimeout(() => {
              posts.push(post);

              const error = false;      //when there's no error

              if(!error)              //this condition will true
              {
                  resolve();
              }

              else
              {
                  reject('Error: Something went wrong!');
              }
          }, 2000);
      });
  }




  createpost({title: 'post three', body: 'this is post three'})
   .then(getposts);     //getposts will call
   */


   //or

   /* function createpost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = true;     //when there's an error 

            if(!error)   
            {
                resolve();
            }

            else                    //this condition willl run
            {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    });
}


createpost({title: 'post three', body: 'this is post three'})
 .then(getposts)
 .catch(err => console.log(err));   //this func will call 
 */


 /* PROMISE.ALL

 const promise1 = Promise.resolve('hello world');
 const promise2 = 10;
 const promise3 = new Promise((resolve, reject) =>
 setTimeout(resolve, 2000, 'goodbye'));
const promise4 = fetch                            //using fetch
('https://jsonplaceholder.typicode.com/users').then(res=> res.json());
Promise.all([promise1, promise2, promise3,promise4])  //promise.all takes array of promises
.then(values =>
   console.log(values));
*/


// ASYNC / AWAIT (MORE RELIABLE)

    const posts = [       
    {title : 'post one', body: 'this is post one'},
    {title : 'post two', body: 'this is post two'}
    ];
    

    
    function getposts(){
    
        setTimeout(() => {
            let output ='';
    
            posts.forEach((post , index) =>{
                output += `<li>${post.title}</li>`;
            });
    
            document.body.innerHTML = output;
        }, 1000);    //posts display after 1sec
    
        }



function createpost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;      //when there's no error

            if(!error)              //this condition will true
            {
                resolve();
            }

            else
            {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    });
}

/*async function init()
{
    await createpost({title: 'post three', bode: 'this is post three'});

    getposts();
}

init();*/


// ASYNC / AWAIT USING FETCH API

async function fetchUsers(){
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();