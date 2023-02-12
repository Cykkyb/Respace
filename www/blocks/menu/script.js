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
