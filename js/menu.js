var $nav = document.getElementById("nav");
var $burgerOn = document.getElementById("burger");

function affiche(){
  $nav.classList.remove("closed");
  $nav.classList.add("opened");
}

$burgerOn.onclick = affiche;
