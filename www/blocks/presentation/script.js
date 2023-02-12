import {ShrinkText} from '/scripts/ShrinkText/script';

new ShrinkText('.presentation__text', {
        breakpoints: {
            768: {
                lines: 4,
                lineHeight: 27,
            },
        }
    }
);