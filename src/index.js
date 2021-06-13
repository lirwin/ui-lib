import Tooltip from './ui-lib/tooltip';
import Dropdown from './ui-lib/dropdown';
import Tabs from './ui-lib/tabs';
import Snackbar from './ui-lib/snackbar';

const $tooltip = document.querySelector('.tooltip')
const tooltip = new Tooltip($tooltip)

tooltip.init()

const $dropdowns = document.querySelectorAll('.dropdown')

$dropdowns.forEach(($dropdown) => {
    const dropdown = new Dropdown($dropdown)
    dropdown.init()
})

const $tabs = document.querySelector('.tabs')
const tabs = new Tabs($tabs)
tabs.init()


const snackbar = new Snackbar()
snackbar.init()

const $snackbarTrigger = document.querySelector('.snackbar-trigger')
$snackbarTrigger.addEventListener('click', (event) => {
    snackbar.show('This is cool!!')
})