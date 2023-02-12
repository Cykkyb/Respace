import {ShrinkText} from '/scripts/ShrinkText/script';

new ShrinkText('.wallpaper-gallery__text', {
        breakpoints: {
            1400: {
                lines: 10,
                lineHeight: 27,
            },
            992: {
                lines: 5,
                lineHeight: 27,
            },
            768: {
                lines: 4,
                lineHeight: 25,
            },
        }
    }
);

const main = document.querySelectorAll('.wallpaper-gallery__main');
const image = document.querySelectorAll('.wallpaper-gallery__image');
const itemCount = image.length;
for (let i = 0; i < itemCount; i++) {
    if (i % 2 === 1) {
        main[i].classList.add('_even');
        image[i].classList.add('_even');
    }
}

