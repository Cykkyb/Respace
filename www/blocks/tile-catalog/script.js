import {ShrinkText} from '/scripts/ShrinkText/script';

window.onload = new ShrinkText('.tile-catalog-banner__text', {
        breakpoints: {
            768: {
                lines: 5,
                lineHeight: 27,
            },
        }
    }
);

