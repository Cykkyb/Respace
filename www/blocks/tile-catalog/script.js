import {ShrinkText} from '/scripts/ShrinkText/script';

window.onload = new ShrinkText('.tile-catalog-banner__text', {
        breakpoints: {
            768: {
                lines: 5.1,
                lineHeight: 27,
            },
            500: {
                lines: 1,
                lineHeight: 27,
            },
        }
    }
);

