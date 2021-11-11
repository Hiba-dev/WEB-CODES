//ASYNCHRONOUS JS

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
    }, 1000); //posts display after 1sec

    }


    function createpost(post, callback){     //use callbacks 
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    }

    
  createpost({title: 'post three', body: 'this is post three'},getposts); 



  