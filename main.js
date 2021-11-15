// --- Init ---

const item_list = document.querySelector('.item-list')

initItems()
sortList()

function initItems() {

    let items = document.querySelectorAll('.item')

    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('complete')
            item.classList.toggle('incomplete')
            sortList()
        })
    })
}

// --- Add Items ---

const newitem_btn = document.querySelector('#newitem-btn')
const newitem_text = document.querySelector('#newitem-text')

newitem_btn.addEventListener('click', () => {
    addItem()
})


newitem_text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addItem()
    }
})

function addItem() {
    if (newitem_text.value !== '') {

        const item = document.createElement("li")

        item.innerHTML = newitem_text.value
        item.classList.add('item')
        item.classList.add('incomplete')
        item_list.appendChild(item)

        item.addEventListener('click', () => {
            item.classList.toggle('complete')
            item.classList.toggle('incomplete')
            sortList()
        })

        newitem_text.value = ''
    }

    sortList()
}

// --- Filter ---

// let filterCurrent = 'all'
const filter_uncompleted = document.querySelector('#filter-uncompleted')
const filter_completed = document.querySelector('#filter-completed')
const filter_all = document.querySelector('#filter-all')

// change to a foreach add event listener w/ id as filter param

filter_uncompleted.addEventListener('click', () => {
    filter('uncompleted')
})

filter_completed.addEventListener('click', () => {
    filter('completed')
})

filter_all.addEventListener('click', () => {
    filter('all')
})


function filter(type) {

    let items = document.querySelectorAll('.item')

    if (type === 'uncompleted') {

        items.forEach((item) => {
            if (item.classList[1] === 'complete') {
                item.style.display = 'none'
            } else {
                item.style.display = 'list-item'
            }
        })

    } else if (type === 'completed') {

        items.forEach((item) => {

            if (item.classList[1] === 'complete') {
                item.style.display = 'list-item'
            } else {
                item.style.display = 'none'
            }
        })

    } else {
        items.forEach((item) => {
            item.style.display = 'list-item'
        })
    }
}

// --- Delete ---

const delete_completed = document.querySelector('#remove-completed')
const delete_all = document.querySelector('#remove-all')

delete_completed.addEventListener('click', () => {
    deleteItems('completed')
})

delete_all.addEventListener('click', () => {
    deleteItems('all')
})

function deleteItems(criteria) {

    let items = document.querySelectorAll('.item')

    if (criteria === 'completed') {
        items.forEach((item) => {
            if (item.classList[1] === 'complete') {
                item.remove()
            }
        })
    } else {
        items.forEach((item) => {
            item.remove()
        })
    }
}

// --- Sort ---

function sortList() {

    let itemsAll = []
    let itemsCompleted = []
    let itemsIncomplete = []
    let itemsNew = []

    let items = document.querySelectorAll('.item')

    items.forEach((item) => {
        itemsAll.push(item)
    })

    itemsCompleted = itemsAll.filter(item => item.classList[1] === 'complete')
    itemsIncomplete = itemsAll.filter(item => item.classList[1] !== 'complete')
    itemsNew = itemsIncomplete.concat(itemsCompleted)

    items.forEach((item) => {
        item.remove()
    })

    itemsNew.forEach((item) => {
        item_list.appendChild(item)
    })
}