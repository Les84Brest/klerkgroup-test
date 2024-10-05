const BURGER_BTN_SELECTOR = '.js-burger';
const MENU_SELECTOR = '.js-menu-body';

const ACTIVE_CLASS = 'active';
const LOCK_SCROLL_CLASS = 'scroll-lock';


export class TopMenu {
    wrap = null;
    burger = null;
    menu = null;
    isOpen = false;

    constructor(wrap) {
        this.wrap = wrap;

        this.init();
    }

    init() {

        this.burger = this.wrap.querySelector(BURGER_BTN_SELECTOR);

        this.burger.addEventListener("click", this.toggleOpen);

        this.menu = this.wrap.querySelector(MENU_SELECTOR);
    }

    toggleOpen = () => {
        this.burger.classList.toggle(ACTIVE_CLASS);

        this.isOpen = this.burger.classList.contains(ACTIVE_CLASS);

        if (this.isOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }

    }

    openMenu() {
        this.menu.classList.add(ACTIVE_CLASS);
        document.body.classList.add(LOCK_SCROLL_CLASS)
    }

    closeMenu() {
        this.menu.classList.remove(ACTIVE_CLASS);
        document.body.classList.remove(LOCK_SCROLL_CLASS)
    }
}

export default TopMenu