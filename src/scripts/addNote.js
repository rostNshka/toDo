import EmptyList from "./emptyList.js";
import ModalWindow from "./ModalWindow.js";

class AddNote {
    constructor() {
        this.addInput = document.querySelector('.new-note__input')
        this.addButton = document.querySelector('.utils__add-button')
        this.list = document.querySelector('.todo__list')

        this.addEvent()
        this.utilsEvents()
        this.localListSave()
        this.localListShow()
    }

    addEvent(){
        this.localListShow()
        new EmptyList()
        this.addButton.addEventListener('click',()=>{
            this.li = document.createElement('li')

            if(this.addInput.value === ''){
                alert('Введите данные')
            } else {
                this.li.innerHTML = this.addInput.value
                this.list.appendChild(this.li)
                this.addInput.value = ''

                this.span = document.createElement('span')
                this.span.innerText = '\u00d7'
                this.li.appendChild(this.span)

                this.localListSave()
                this.localListShow()

                new ModalWindow().closeModal()
                new EmptyList()
            }
        })
    }

    utilsEvents(){
        this.list.addEventListener('click',(e)=>{
            if(e.target.tagName === 'LI'){
                e.target.classList.toggle('checked')
                this.localListSave()
                this.localListShow()
            } else if(e.target.tagName === 'SPAN'){
                e.target.parentElement.remove()
                this.localListSave()
                this.localListShow()
            }

            new EmptyList()
        })
    }

    localListSave(){
        localStorage.setItem('data',this.list.innerHTML)
    }

    localListShow(){
        this.list.innerHTML = localStorage.getItem('data')
    }
}



export default AddNote;