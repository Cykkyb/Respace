new Swiper('.wallpaper-slider__slider', {

    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        577: {
            slidesPerView: 2.4,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 15,
        }

    },
    navigation: {
        nextEl: '.wallpaper-slider__button-next',
        prevEl: '.wallpaper-slider__button-prev',
    },
});