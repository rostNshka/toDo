class FilterEvent {
    constructor() {
        this.selector = document.querySelector('#select-items')
        this.listLi = document.querySelectorAll("li");

        this.selector.addEventListener('change', () => {
            this.filter()
        })
    }
    filter() {
        if(this.selector.value === 'All'){
            this.listLi.forEach(element => element.classList.remove('hide')
            )
        }
        else if(this.selector.value === 'Complete'){
            this.listLi.forEach(element => {
                if(element.classList.contains('checked')){
                    element.classList.remove('hide')
                } else {
                    element.classList.add('hide');
                }
            })
        }
        else {
            this.listLi.forEach(element => {
                if(element.classList.contains('checked')){
                    element.classList.add('hide')
                } else {
                    element.classList.remove('hide');
                }
            })
        }
    }
}

export default FilterEvent;