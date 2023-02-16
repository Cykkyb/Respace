const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    const menuIcon = menuButton.querySelector('.icon-menu');
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
    menuIcon.classList.toggle('icon-menu_active')
    menu.classList.toggle('menu_active');
});
