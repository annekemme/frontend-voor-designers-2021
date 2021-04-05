var jsondata = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"; 
var main = document.querySelector("main");
// console.log(main); 

// JSON inladen met XMLHttpRequest
var request = new XMLHttpRequest(); 
request.open('get', jsondata);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
console.log("data is geladen"); 	
console.log(request.response);
console.log(request.response[1].title)
console.log(request.response[1].cover)

for(var i=0;i<request.response.length;i++){

//article per film aanmaken
var article = document.createElement("article");

//titel
var title = document.createElement("h2");
title.textContent = request.response[i].title;
article.appendChild(title);

//plot
var plot = document.createElement("p");
plot.textContent = request.response[i].plot;
article.appendChild(plot);

//plaatje
var plaatje = document.createElement("img");
plaatje.src = request.response[i].cover; 
article.appendChild(plaatje);

var main = document.createElement("article")
main.textContent = request.response[i].main; 
article.appendChild(main);

//koppel het article (met de titel, plot en plaatje) aan de mainmain.appendChild(article);
var main = document.getElementById("container");
main.appendChild(article);
}
});


