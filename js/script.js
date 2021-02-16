var hearts = document.querySelectorAll("button.wish");

hearts[0].addEventListener("click", addToFavorites);
hearts[1].addEventListener("click", addToFavorites);
hearts[2].addEventListener("click", addToFavorites);
hearts[3].addEventListener("click", addToFavorites);

function addToFavorites(event) {

  var clickedHeart = event.target;
  
  if (clickedHeart.innerHTML == "🤍") {
    
    clickedHeart.innerHTML = "❤️";
  }
 
  else {

    clickedHeart.innerHTML = "🤍";
  }
}
