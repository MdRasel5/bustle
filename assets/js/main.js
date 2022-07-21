// Hero Banner Slider
$(document).ready(function(){
    $('.hero-slider-active').slick({
        dots: true,
        speed: 500,
       arrows: false
    });



     $('.currency-select').niceSelect();
});

// Cart
function myFunction() {
   var element = document.getElementById("cart-dropdown");
   element.classList.toggle("cart-dropdown-block");
}