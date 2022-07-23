// Hero Banner Slider
$(document).ready(function(){
    $('.hero-slider-active').slick({
        dots: true,
        speed: 500,
       arrows: false
    });

     $('.currency-select').niceSelect();
});

// Mobile Menu
function mobileMenu() {
   var element = document.getElementById("mobile-header");
   element.classList.toggle("mobile-header-visabble");
   
}
function mobileMenuClose() {

   let element = document.getElementById("mobile-header");
   element.classList.remove("mobile-header-visabble");
   
}



// Cart
function cartDropdown() {
   var element = document.getElementById("cart-dropdown");
   element.classList.toggle("cart-dropdown-block");
}
