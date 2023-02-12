import {Filter} from '/scripts/Filter/script';
import {ShrinkText} from '/scripts/ShrinkText/script';

new Filter('.paint-filter__list', '.paint-catalog__item');

new ShrinkText('.paint-main__text', {
        breakpoints: {
            768: {
                lines: 5,
                lineHeight: 27,
            },
        }
    }
);

const selectButton = document.querySelector('.paint-filter__select');

selectButton.addEventListener('click', () => {
    const selectIcon = document.querySelector('.paint-filter__select-icon');
    const filterList = document.querySelector('.paint-filter__list');

    selectIcon.classList.toggle('paint-filter__select-icon_active');
    filterList.classList.toggle('paint-filter__list_active');
});

initSlider('.paint-catalog__list');

function initSlider(sliderClass) {
    const slider = document.querySelector(sliderClass);

    let isDown = false;
    let startX;
    let scrollLeft;


    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('_active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('_active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('_active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); //scroll-fast
        slider.scrollLeft = scrollLeft - walk;

    });
}


