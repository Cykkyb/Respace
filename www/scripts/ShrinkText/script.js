export class ShrinkText {
    constructor(text, options = {}) {
        this.text = document.querySelectorAll(text);
        this.settings = {
            default: options.default ? options.default : 0,
            breakpoints: options.breakpoints ? options.breakpoints : 0
        };

        this.breakpoints = [];

        this.setParameters();
    }

    setParameters() {
        this.checkDefault();
        this.checkBreakpoints();

    }

    checkDefault() {
        if (this.settings.default) {
            this.lineHeight = this.settings.default.lineHeight ? this.settings.default.lineHeight : 0;
            this.lines = this.settings.default.lines ? this.settings.default.lines : 0;
            this.defaultShrink = this.lines * this.lineHeight;
        }
    }

    checkBreakpoints() {
        let activeBreakpoints = 0;

        if (this.settings.breakpoints) {
            this.breakpoints = Object.keys(this.settings.breakpoints).sort(function (a, b) {
                return b - a;
            }).map((item) => Number(item));

            this.breakpoints.forEach((item) => {
                if (window.innerWidth <= item) {
                    activeBreakpoints = item;
                }
            });
        }
        this.initHeight(activeBreakpoints);
    }

    initHeight(activeBreakpoints) {
        if (this.defaultShrink) {
            this.shrinkHeight = this.defaultShrink;
        }
        if (this.settings.breakpoints[activeBreakpoints]) {
            this.lineHeight = this.settings.breakpoints[activeBreakpoints].lineHeight;
            this.lines = this.settings.breakpoints[activeBreakpoints].lines;
            this.shrinkHeight = this.lines * this.lineHeight;
        }

        this.checkPram(activeBreakpoints);
    }

    checkPram() {
        this.text.forEach((item) => {
            if (item.clientHeight > this.shrinkHeight) {
                this.addClass(item);
                this.createButton(item);
                this.setHeight(item);
            }
        });
    }


    addClass(text) {
        text.classList.add('_shrink');
    }

    setHeight(text) {
        const expandButton = text.nextElementSibling;

        if (expandButton.classList.contains('expand_active')) {
            text.style.maxHeight = text.style.height;
        } else {
            text.style.height = `${text.clientHeight}px`;
            text.style.maxHeight = `${this.shrinkHeight}px`;
        }
    }


    createButton(text) {
        let expandButton = document.createElement('div');
        expandButton.className = 'expand';
        expandButton.innerHTML = '<span>Развернуть...</span> <span>Скрыть...</span>';

        text.after(expandButton);

        this.setEvent(expandButton);
    }

    setEvent(expandButton) {

        expandButton.addEventListener('click', throttle(() => {

            const text = expandButton.parentElement.querySelector('._shrink');

            expandButton.classList.toggle('expand_active');

            this.setHeight(text);
        }, 500));

    }

}

function throttle(func, ms) {
    let timer = false
    return function (...args) {
        if (timer) {
            return;
        }
        func.apply(this, args);
        timer = true;

        setTimeout(() => {
            timer = false
        }, ms);
    }
}
