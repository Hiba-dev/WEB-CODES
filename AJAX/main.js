/*var ourreq = new XMLHttpRequest();     //req define
ourreq.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
ourreq.onload = function(){
 //console.log(ourreq.responseText);
   var ourdata = JSON.parse(ourreq.responseText);
   console.log(ourdata[1]);
};
ourreq.send();  //req send  */



/*var btn = document.getElementById("btn")
btn.addEventListener("click", function(){        //calls when clicks button

  var ourreq = new XMLHttpRequest();    //runs when pg reloads(ajax call) 
ourreq.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
ourreq.onload = function(){
  var ourdata = JSON.parse(ourreq.responseText);
   console.log(ourdata[1]);
};
ourreq.send();  
}); */



/*var animalcontainer = document.getElementById("animal-info")
var btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
  var ourreq = new XMLHttpRequest();   
ourreq.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
ourreq.onload = function(){
  var ourdata = JSON.parse(ourreq.responseText);
  renderhtml(ourdata);
}
ourreq.send();
});

var renderhtml =(data)=>{
  var htmlstring  = "this is a test"
  animalcontainer.insertAdjacentHTML('beforeend',htmlstring);
} */



var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' +
  pageCounter + '.json');
  ourRequest.onload = function() {
    var ourdata = JSON.parse(ourRequest.responseText);
    renderHTML(ourdata);
  };

ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}