var swiper=new Swiper(".featured-slider",
{
    spaceBetween: 10,
    loop:true,
    cenderedSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction: false,
    },
    navigation:
    {
        nextEl:".swiper-button-next",
        nextEl:".swiper-button-prev",
    },
    breakpoints:{
        0: {
            sliderPerView: 1,
        },
        450: {
            sliderPerView: 2,
        },
        768: {
            sliderPerView: 3,
        },
        1024: {
            sliderPerView: 4,
        },
    },
   
});