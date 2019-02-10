import $ from 'jquery';

class Modal {
    constructor() {
        this.modalOpenBtn = $('.open-modal');
        this.modalCloseBtn = $('.modal__close');
        this.modal = $('.modal');
        this.listener();
    }

    listener() {
        this.modalOpenBtn.click(this.modalOpen.bind(this));
        this.modalCloseBtn.click(this.modalClose.bind(this));
        $(document).keyup(this.modalEsc.bind(this));
    }

    modalOpen() {
        this.modal.addClass('modal--open');
        return false;
    }

    modalClose() {
        this.modal.removeClass('modal--open');
    }

    modalEsc(event) {
        if (event.keyCode == 27) {
            this.modalClose();
        }
    }

}

export default Modal