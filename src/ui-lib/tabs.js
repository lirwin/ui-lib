import './styles/tabs.css'

class Tabs {
    constructor(container) {
        this.container = container
        this.tabs = container.querySelectorAll('.trigger')
        this.contents = container.querySelectorAll('.content')
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                this.toggleTabs(event.target)
                this.toggleContent(event.target)
            })
        });
    }

    removeClassFromElements(elements, style) {
        elements.forEach((element) => element.classList.remove(style))
    }

    toggleTabs(targetElement) {
        this.removeClassFromElements(this.tabs, 'active')
        targetElement.classList.add('active')
    }

    toggleContent(targetElement) {
        this.removeClassFromElements(this.contents, 'active')
        const targetId = targetElement.getAttribute('data-target-id')
        const $content = document.getElementById(targetId.replace('#', ''))
        $content.classList.add('active')
    }
}

export {Tabs as default}