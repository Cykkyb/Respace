window.addEventListener('click', (e) => {
    targetElement = e.target;

    if (targetElement.closest('.menu__arrow')) {
        label = targetElement.parentElement;
        item = label.parentElement;
        sublist = label.nextElementSibling;
        arrow = label.querySelector('.menu__arrow');

        if (item.classList.contains('menu__item_active')) {
            item.style.height = 30 + 'px';
        } else {
            countItem = sublist.childElementCount;
            itemHeight = countItem * 30 + 80;
            item.style.height = itemHeight + 'px';
        }
        item.classList.toggle('menu__item_active');
        arrow.classList.toggle('menu__arrow_active');

    }
});


window.addEventListener('resize', debounce(() => {
    const menu = document.querySelector('.menu__main');
    const menuItem = menu.querySelectorAll('.menu__item');
    const arrow = menu.querySelectorAll('.menu__arrow');

    if (window.innerWidth > 992) {
        menuItem.forEach(item => {
            item.style.height = 'auto';
            item.classList.remove('menu__item_active');
        });
        arrow.forEach(item=>{
            item.classList.remove('menu__arrow_active')
        });
    } else {
        menuItem.forEach(item => {
            if (!item.classList.contains('menu__item_active')) {
                item.style.height = 30 + 'px';
            }
        });
    }
}, 300));


function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    }
}