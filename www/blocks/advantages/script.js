const advantages = document.querySelector('.advantages');

advantages.addEventListener('click', (e) => {
    const targetElement = e.target;
    if (targetElement.closest('.advantages__arrow')) {
        const advantagesItem = targetElement.parentElement.parentElement;
        const textHeight = advantagesItem.querySelector('.advantages__text').clientHeight;

        advantagesItem.style.maxHeight = (advantagesItem.classList.contains('_active')) ? `51px` : `${textHeight + 66}px`;
        advantagesItem.classList.toggle('_active');
    }
});