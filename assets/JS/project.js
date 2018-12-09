$(document).ready(function() {

  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 3000);
  }

  });
  var array = ["Venom" , "Halloween" , "Killer Kate" , "Monster Party" , "Suspira" , "Instant Family" , "The Grinch" , "Night School" , "Green Book" , "The Long Dumb Road" , "A Star is Born" , "A Beautiful Boy" , "Bohemian Rhapsody" , "Boy Erased" , "Mary Queen of Scots" , "Robin Hood"];

  var randomAnswer = array[Math.floor(Math.random() * array.length)];

  console.log("and the best movie award goes to: " + randomAnswer);




  function goBack() {
    window.history.back()
  }

  window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "aqua";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
