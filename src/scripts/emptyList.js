class EmptyList {
    constructor() {
        this.list = document.querySelector('.todo__list')
        this.emptyImg = document.querySelector('.module__empty')
        this.checkList()
    }
    checkList() {
        if(this.list.childElementCount === 0){
            this.emptyImg.style.display = 'flex'
        } else {
            this.emptyImg.style.display = 'none'
        }
    }
}

export default EmptyList;
