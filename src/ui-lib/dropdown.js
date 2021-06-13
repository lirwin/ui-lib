import './styles/dropdown.css'

class Dropdown {
    constructor(container) {
        this.container = container
        this.trigger = container.querySelector('.trigger')
        this.content = container.querySelector('.content')
    }

    toggleActiveClass(element) {
        element.classList.toggle('active')
    }

    init() {
        this.trigger.addEventListener('click', (params) => {
            [this.trigger, this.content].forEach((element) => this.toggleActiveClass(element))
        })
    }
}

export{Dropdown as default}