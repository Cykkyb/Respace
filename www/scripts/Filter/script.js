export class Filter {
    constructor(tabContainer, filterItem) {
        this.tabContainer = document.querySelector(tabContainer);
        this.filterItem = document.querySelectorAll(filterItem);

        this.tabsData = [];
        this.filterData = [];
        this.setEvent();
    }

    setEvent() {

        this.tabContainer.addEventListener('click', (e) => {
            let targetElement = e.target;
            if (targetElement.closest('.tab')) {

                if (targetElement.classList.contains('tab_active')) {
                    this.removeTabsData(targetElement);
                } else {
                    this.addTabsData(targetElement);
                }
                targetElement.classList.toggle(`tab_active`)
                this.updateFilterItem()
            }

        });

    }

    addTabsData(targetElement) {
        let filter = targetElement.dataset.filter;
        this.tabsData.push(filter);
    }

    removeTabsData(targetElement) {
        let dataFilter = targetElement.dataset.filter;
        let dataFilterIndex = this.tabsData.indexOf(dataFilter);
        if (dataFilterIndex !== -1) {
            this.tabsData.splice(dataFilterIndex, 1)
        }
    }

    updateFilterItem() {

        if (this.tabsData.length) {
            this.filterItem.forEach(color => {
                let filterData = color.dataset.filter.split('|');
                let filterCount = 0;
                filterData.forEach(item => {
                    if (this.tabsData.includes(item)) {
                        color.style.display = 'block';
                        filterCount++
                    }
                });
                if (!filterCount) {
                    color.style.display = 'none';
                }
            });
        } else {
            this.filterItem.forEach((item) => {
                item.style.display = 'block';
            });
        }

    }
}



