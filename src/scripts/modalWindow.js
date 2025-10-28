class ModalWindow {
    constructor() {
        this.buttonModal = document.querySelector('.new-note__button');
        this.modalWindow = document.querySelector('.modal');
        this.cancelButton = document.querySelector('.utils__cancel-button');
        this.inputModal = document.querySelector('.new-note__input');
        this.labelModal = document.querySelector('.new-note__label');
        this.init()
    }

    openModal() {
        this.modalWindow.style.visibility = 'visible';
        this.modalWindow.style.opacity = '1';
    }
    closeModal() {
        this.modalWindow.style.visibility = 'hidden';
        this.modalWindow.style.opacity = '0';
        this.labelModal.style.visibility = 'visible'
        this.inputModal.value = '';
    }
    init(){
        this.buttonModal.addEventListener('click', () => {
            this.openModal()
        });
        this.cancelButton.addEventListener('click', () => {
            this.closeModal();
        })
        this.inputModal.addEventListener('focus', () => {
            this.labelModal.style.visibility = 'hidden';
        })
        this.inputModal.addEventListener('focusout, blur', () => {
            if(this.inputModal.value === '' ){
                this.labelModal.style.visibility = 'visible'
            }
        })
    }
}

export default ModalWindow;