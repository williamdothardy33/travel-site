class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.startListener();
    }

    startListener() {
        this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--menu-open');
        this.siteHeader.classList.toggle('site-header--bg-revealed');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-glyph');
    }

}

export default MobileMenu;