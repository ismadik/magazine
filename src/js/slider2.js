const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    // delay: 6500,
    // stopOnLastSlide: true,
    // disableOnInteraction: false,},
    breakpoints: {
    768: {
        slidesPerView: 1,
    },
    490: {
        slidesPerView: 1,
    },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoHeight: true,
});
