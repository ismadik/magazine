const swiper = new Swiper('.mySwiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    // delay: 3500,
    // stopOnLastSlide: true,
    // disableOnInteraction: false,},
    breakpoints: {
    768: {
        slidesPerView: 3,
    },
    490: {
        slidesPerView: 2,
    },
    },
});
