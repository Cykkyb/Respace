import {
    Swiper,
    Navigation,
    Pagination,
    Scrollbar,
    EffectCoverflow
} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

import {ShrinkText} from '/scripts/ShrinkText/script';

new Swiper('.about-us__slider', {

    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 1,
            spaceBetween: 15,
        },


    },
    navigation: {
        nextEl: '.about-us__button-next',
        prevEl: '.about-us__button-prev',
    },
});

window.onload = new ShrinkText('.designers__text', {
        default: {
            lines: 4,
            lineHeight: 27,
        },
        breakpoints: {
            768: {
                lines: 2,
                lineHeight: 22,
            },
            992: {
                lines: 4,
                lineHeight: 22,
            },
        }

    }
);
