class ThemeSwitcher {
    constructor(buttonSelector) {
        this.button = document.querySelector('.theme__button');
        this.styleMode = localStorage.getItem("styleMode");
        this.init();
    }

    enableDarkStyle() {
        document.body.classList.add('theme__dark');
        document.body.classList.remove('theme__light');
        localStorage.setItem("styleMode", 'dark');
    }

    disableDarkStyle() {
        document.body.classList.add('theme__light');
        document.body.classList.remove('theme__dark');
        localStorage.setItem("styleMode", 'light');
    }

    toggleTheme() {
        this.styleMode = localStorage.getItem("styleMode");
        if (this.styleMode !== 'dark') {
            this.enableDarkStyle();
        } else {
            this.disableDarkStyle();
        }
    }

    init() {
        this.button.addEventListener('click', () => this.toggleTheme());
        if (this.styleMode === 'dark') {
            this.enableDarkStyle();
        } else {
            this.disableDarkStyle();
        }
    }
}

export default ThemeSwitcher;
