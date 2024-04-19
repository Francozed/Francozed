

var sidemenu = document.getElementById("sidemenu");
function Openmenu(){
    sidemenu.style.right = "0";
}
function Closemenu(){
    sidemenu.style.right = "-220px";
}



/*
(function($) {
  "use strict";
  $(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('.top-header').addClass('sticky');
  } else {
    $('.top-header').removeClass('sticky')
  }
});
}(jQuery));*/
/*
window.onscroll = function() {myFunction()};
var navigation = document.getElementsByClassName("navigation");
var sticky = navigation.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navigation.classList.add("sticky")
    } else{
        navigation.classList.remove("sticky");
    }
}
*/

/*
$('.navbar-nav .nav-link').on('click', function() {
    var toggle = $('.navbar-toggler').is(':visible');
    if (toggle) {
        $('.navbar-collapse').collapse('hide');
    }
});*/

/*************FOR AUTOMATIC SLIDESHOW*******/
/**var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
**/
/********************NEWS SLIDE SHOW************* */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*******************************LOGIN PAGE********* */
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




