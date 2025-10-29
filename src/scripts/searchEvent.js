class SearchEvent {
    constructor() {
        this.input = document.querySelector(".field__input");
        this.inputLabel = document.querySelector(".field__label");
        this.listLi = document.querySelectorAll("li");

        this.hideLabel()
        this.searchEvent()
    }
    hideLabel() {
        this.input.addEventListener('focus', () => {
            this.inputLabel.style.visibility = 'hidden';
        })
        this.input.addEventListener('blur', () => {
            if(this.input.value === '' ){
                this.inputLabel.style.visibility = 'visible'
            }
        })
    }
    searchEvent(){
        document.body.addEventListener('keydown', (e) => {
            if (e.key === 'Enter'){
                e.preventDefault();
            }
        })

        document.querySelector('#search-note').oninput = () => {
            let text = this.input.value.trim();
            if (text !== ''){
                this.listLi.forEach((item) => {
                    if(item.innerText.search(text) === -1){
                        item.classList.add('hide');
                    } else {
                        item.classList.remove('hide');
                    }
                })
            } else {
                this.listLi.forEach((item) => {
                    item.classList.remove('hide');
                })
            }
        }
    }
}

export default SearchEvent;