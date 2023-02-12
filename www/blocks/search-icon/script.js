const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('menu_active') && window.innerWidth < 992) {
        const menuItem = document.querySelectorAll('.menu__item');
        const arrow = document.querySelectorAll('.menu__arrow');

        menuItem.forEach(item => {
                item.style.height = 30 + 'px';
                item.classList.remove('menu__item_active');
            }
        );
        arrow.forEach(item => {
            item.classList.remove('menu__arrow_active');
        });
    }
    menu.classList.toggle('menu_active');
});