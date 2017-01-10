$(document).ready(function(){
  // menu masqué à l'ouverture
  $('#menu').hide();

  $('#nav-icon3').click(function(){
  //animation burger
  $(this).toggleClass('open');
  // ouverture du menu
  $('#menu').slideToggle();
});

// défilement smoothscroll
$(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

});
