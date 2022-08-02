// Hero Banner Slider
$(document).ready(function(){
    $('.hero-slider-active').slick({
        dots: true,
        speed: 500,
       arrows: false
    });

     $('.currency-select').niceSelect();
});

// Tab Product Slider
$(document).ready(function(){
    $('.tab-product-slider-active').slick({
        dots: false,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 2,
         arrows: true,
        prevArrow:"<i class='fa-solid fa-angle-left arrow-left' aria-hidden='true'></i>",
        nextArrow:"<i class='fa-solid fa-angle-right arrow-right' aria-hidden='true'></i>",
        responsive: [
         {
            breakpoint: 1199.98,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
         },
         {
            breakpoint: 767.98,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
    });

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
