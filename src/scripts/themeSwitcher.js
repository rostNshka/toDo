class ThemeSwitcher {
    constructor(buttonSelector) {
        this.button = document.querySelector('.theme__button');
        this.styleMode = localStorage.getItem("styleMode");

        this.input = document.querySelectorAll('input');
        this.svg = document.querySelectorAll("svg")
        this.span = document.querySelectorAll("span");

        this.init();
    }

    enableDarkStyle() {
        document.body.classList.add('theme__dark');
        this.input.forEach((item) => {
            item.style.color = 'var(--light-color)';
        })

        this.svg.forEach((item) => {
            item.style.color = 'var(--dark-color)';
        })
        this.span.forEach((item) => {
            item.style.color = 'var(--light-color)';
        })

        document.body.classList.remove('theme__light');
        localStorage.setItem("styleMode", 'dark');
    }

    disableDarkStyle() {
        document.body.classList.add('theme__light');
        this.input.forEach((item) => {
            item.style.color = 'var(--dark-color)';
        })
        this.svg.forEach((item) => {
            item.style.color = 'var(--light-color)';
        })
        this.span.forEach((item) => {
            item.style.color = 'var(--dark-color)';
        })
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
