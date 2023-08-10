console.log("adass")

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("butt");
    button.addEventListener("click", function() {
      var quizContainer = document.querySelector(".quiz-container");
      quizContainer.classList.remove("inactive");
      var background = document.body;
      console.log(background.style.backgroundImage);
      var girisyazisi= document.getElementById("girisyazisi");
      girisyazisi.style.display="none";
      button.style.display="none";
    });
  });

  var Index = 0;

  function Next() {
    Index++; 
    if (Index < 5) {
        Load(Index);
    } else {
        Finish();
    }
}

function Load(Index) {
  
}





