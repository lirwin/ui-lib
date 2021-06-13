import './styles/snackbar.css'

class Snackbar {
    constructor() {
        this.$snackbar = document.createElement('div')
    }

    init() {
        this.$snackbar.classList.add('snackbar')

        const body = document.querySelector('body')
        body.appendChild(this.$snackbar)
    }

    show(message) {
        console.log(message)
        this.$snackbar.textContent = message
        this.$snackbar.classList.add('active')

        setTimeout(() => {
            this.$snackbar.classList.remove('active')
        }, 4000);
    }
}

export {Snackbar as default}