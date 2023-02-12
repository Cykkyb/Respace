window.addEventListener('click', (e) => {
    targetElement = e.target;

    if (targetElement.closest('.button-up')) {
        targetElement.preventDeafult;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});