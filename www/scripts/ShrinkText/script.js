export class ShrinkText {
    constructor(text, options = {}) {
        this.text = document.querySelectorAll(text);
        this.settings = {
            default: options.default ? options.default : 0 ,
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
              console.log(this.breakpoints);

            this.breakpoints.forEach((item) => {
                if (window.innerWidth <= item) {
                    activeBreakpoints = item;
                }
            });
        }
        this.setHeight(activeBreakpoints);
    }

    setHeight(activeBreakpoints) {
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

    checkPram(activeBreakpoints) {
        this.text.forEach((item) => {
            if ((item.clientHeight > this.shrinkHeight && activeBreakpoints) || item.clientHeight > this.defaultShrink) {
                this.addClass(item);
                this.setShrinkHeight(item);
                this.createButton(item);
            }
        });
    }


    addClass(item) {
        item.classList.add('_shrink');
    }

    setExpandHeight(item) {
        item.style.maxHeight = item.style.height;
    }

    setShrinkHeight(item) {
        item.style.height = `${item.clientHeight}px`;
        item.style.maxHeight = `${this.shrinkHeight}px`;
    }

    createButton(item) {
        let expandButton = document.createElement('div');
        expandButton.className = 'expand';
        expandButton.innerHTML = '<span>Развернуть...</span> <span>Скрыть...</span>';

        item.after(expandButton);

        this.setEvent(expandButton);

    }

    setEvent(expandButton) {

        expandButton.addEventListener('click', throttle(() => {

            const text = expandButton.parentElement.querySelector('._shrink');

            if (expandButton.classList.contains('expand_active')) {
                this.setShrinkHeight(text);
            } else {
                this.setExpandHeight(text);
            }
            expandButton.classList.toggle('expand_active');

        }, 500));

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
    }

}


// setEvent(){
//     window.addEventListener('resize', debounce( this.resize, 1000));
//     function debounce(callback, delay){
//         let timer;
//
//         return function (...args){
//             clearTimeout(timer);
//             timer = setTimeout(()=>{
//                 callback.apply(this, args);
//             }, delay);
//         }
//     }
// }
// resize(){
//     this.setParameters();
// }


