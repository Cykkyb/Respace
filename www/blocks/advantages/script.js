const advantagesLabels = document.querySelectorAll('.advantages__labels');

advantagesLabels.forEach(item => (
    item.addEventListener('click', (e) => {
        if (window.innerWidth > 576) {
            return
        }
        const advantagesItem = item.parentElement;
        const textHeight = advantagesItem.querySelector('.advantages__text').clientHeight;
        const advantagesArrow = advantagesItem.querySelector('.advantages__arrow');

        advantagesArrow.classList.toggle('advantages__arrow_active');
        advantagesItem.style.maxHeight = (advantagesItem.classList.contains('advantages__item_active')) ? `51px` : `${textHeight + 66}px`;
        advantagesItem.classList.toggle('advantages__item_active');
    })));